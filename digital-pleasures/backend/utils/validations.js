const {body} = require ('express-validator')
const path = require('path')

module.exports = {
    validationProducts: [
        body('titulo').notEmpty().withMessage('Debes completar el nombre del producto').bail()
            .isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres'),
        body('precio').notEmpty().withMessage('Debes completar el precio del producto').bail(),
        body('descripcion').notEmpty().withMessage('Debes completar la descripcion del producto').bail()
            .isLength({min:20}).withMessage('Debe tener al menos 20 caracteres'),
        body('img').custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
                if (file) {
                    let fileExtension = path.extname(file.originalname);
                    if (!acceptedExtensions.includes(fileExtension)) {
                        throw new Error('Las extensiones permitidas son ' + acceptedExtensions.join(', '));
                    }
                } else {
                    throw new Error('Tienes que subir una imagen');
                }
                return true
            })
    ],

    validationUser: [
        body('nombre').notEmpty().withMessage('Debes completar el nombre del usuario').bail()
            .isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres'),
        body('apellido').notEmpty().withMessage('Debes completar el apellido del usuario').bail()
            .isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres'),
        body('email').notEmpty().withMessage('Debes completar el mail del usuario').bail()
            .isEmail().withMessage('Ingrese un formato de email válido'),
        body('password').notEmpty().withMessage('Debes completar la contraseña del usuario').bail()
            .isLength({min:8}).withMessage('Debe tener al menos 8 caracteres'),
        body('foto_usuario').custom((value, { req }) => {
                let file = req.file;
                let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
                if (file) {
                    let fileExtension = path.extname(file.originalname);
                    if (!acceptedExtensions.includes(fileExtension)) {
                        throw new Error('Las extensiones permitidas son ' + acceptedExtensions.join(', '));
                    }
                } else {
                    throw new Error('Tienes que subir una imagen');
                }
                return true
            })
    ]


}