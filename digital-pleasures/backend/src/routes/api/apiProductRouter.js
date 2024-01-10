const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');

router.get('/', apiProductsController.allProduct);
router.get('/:id', apiProductsController.productById);

module.exports = router;