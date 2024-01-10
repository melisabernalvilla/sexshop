const db = require("../../../database/models");
const Op = db.sequelize.Op;
const stringToNumber = (str) => str === 'false' ? '0' : '1';


const apiUserController = {
  allUsers: async (req, res) => {
    try {
      const isAdmin = req.query.isAdmin
      const query = typeof isAdmin === 'string' ? { admin: stringToNumber(isAdmin) } : {};
      const user = await db.Usuario.findAll({ where: query });
      const formattedUsers = user.map((user) => ({
        return: {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          img: 'http://localhost:3001/imgUser/' + user.img
        }
      }));

      res.json({
        status: 200,
        count: user.length,
        users: formattedUsers,
      });


    } catch (error) {
      console.error(error);
    }
  },

  userById: async (req, res) => {

    const user = await db.Usuario.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'nombre', 'apellido', 'email', 'img'],
    })

    res.json({
      data: {
        ...user.dataValues,
        urlImg: 'http://localhost:3000/public/imgUser/' + user.dataValues.img,
      }
    })
  }
}

module.exports = apiUserController;