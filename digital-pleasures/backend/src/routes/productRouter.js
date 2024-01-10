const express = require('express');
const router = express.Router();
const multer = require('multer');
/* const upload = multer({ dest: '../public/img2'}); */
const path = require('path');
const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img2"))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newfilename = Date.now() + '-' + file.originalname
        console.log(newfilename)
        cb(null, newfilename)
    }
})

const create = multer({ storage });


const {validationProducts} = require('../../../backend/utils/validations')

// @GET /products/detail 
router.get('/:id/detail', productController.detail);

// @GET /products/:id/edit 
router.get('/:id/edit', productController.edit);

// @put /products/:id/update
router.put('/:id/update', create.single('img'), productController.update)

// @GET /products/create 
router.get('/create', productController.create);

// @POST - /products/create
router.post('/create', [create.single('img'), validationProducts], productController.postProduct);

// @DELETE - /products/:id/delete
router.delete('/:id/delete', productController.deleteProduct);

// @GET /products/cart 
router.get('/cart', productController.cart);

// Obtener todos los productos /products/
router.get('/', productController.count);

// Obtener un producto por ID
router.get('/:id', productController.productById);

module.exports = router