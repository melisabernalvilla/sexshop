const express = require('express');
const router =express.Router();
const multer = require('multer');
const path = require('path');
const userController =require ('../controllers/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../public/imgUser"))
    },
    filename: (req, file, cb) => {
      const newfilename = Date.now() + '-' + file.originalname
      cb(null, newfilename)
    }
  })
  
  const create = multer({ storage });

  const {validationUser} = require('../../../backend/utils/validations')

// @GET - /user/login
router.get('/login', userController.getLogin);

// @POST - /user/login
router.post('/login', userController.postLogin);

//formulario de registro
router.get('/register', userController.getRegister);

// @POST - /user/create
router.post('/register', [create.single('foto_usuario'), validationUser], userController.postUser);

// @GET /user/profile 
router.get('/profile', userController.getProfile);

// @GET /user/detail 
router.get('/:id/profile', userController.profile);

//@GET /user/logout
router.get('/logout', userController.logout);

// @GET /user/edit 
router.get('/:id/editprofile', userController.editProfile);

// @put /user/:id/update
router.put('/:id/update', create.single('img'), userController.update)

// @DELETE - /user/delete
router.delete('/:id/delete', userController.deleteUser);

// Obtener todos los usuarios
router.get('/', userController.allUsers);

// Obtener un usuario por ID
router.get('/:id', userController.userById);



module.exports = router;