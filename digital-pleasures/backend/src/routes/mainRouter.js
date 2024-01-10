const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Ruta para la página principal
router.get('/', mainController.index);

// Ruta para manejar la búsqueda
router.get('/search', mainController.search);

module.exports = router;