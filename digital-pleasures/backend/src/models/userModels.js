const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

//npm i bcryptjs
//npm i uuid

const model = {
  fileRoute: path.join(__dirname, '../data/users.json'),
  create: (userData) => {

    // buscar un usuario en userData, para que no se repita:
    const emailInUse = model.findByEmail(userData.email);
    console.log('email en uso', emailInUse);
    if (emailInUse) {
      return ({
        error: 'Este email ya esta en uso'
      });
    }

    let users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

    const newUser = {
      id: uuid.v4(),
      ...userData
    };

    newUser.password = bcrypt.hashSync(newUser.password, 12);

    users.push(newUser);

    const usersJson = JSON.stringify(users);

    fs.writeFileSync(model.fileRoute, usersJson, 'utf-8');

    return newUser;
  },
  findAll: () => {
    const jsonData = fs.readFileSync(model.fileRoute, "utf-8");
    const users = JSON.parse(jsonData);

    return users;
  },

  findById: (id) => {
    const users = model.findAll();
    const selectedUser = users.find(usuarioActual => usuarioActual.id == id);
    return selectedUser;
  },
  findByEmail: (email) => {
    const users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

    const coincidence = users.find(usuarioActual => usuarioActual.email === email);

    return coincidence || null;
  },
  createUser: (data) => {
    let user = model.findAll();

    const lastUserId = user[user.length - 1].id;

    const newUser = {
      id: lastUserId + 1,
      ...data
    }

    user.push(newUser);
    const jsonData = JSON.stringify(user);
    fs.writeFileSync(model.fileRoute, jsonData, 'utf-8');
    return newUser;
  },
  updateUser: (updatedUser) => {
    let users = model.findAll();

    // console.log("OUTSIDEMAP", updatedUser);
    users = users.map((user) => (user.id === updatedUser.id) ? updatedUser : user)
    console.log(updatedUser.img)
    const userJson = JSON.stringify(users);

    console.log(userJson)
    fs.writeFileSync(model.fileRoute, userJson, 'utf-8');
  },
  delete: (id) => {


    let user = model.findAll();

    user = user.filter(userActual => userActual.id !== id);

    const jsonUser = JSON.stringify(user);

    fs.writeFileSync(model.fileRoute, jsonUser, 'utf-8');

    return true;

  },
}

module.exports = model;