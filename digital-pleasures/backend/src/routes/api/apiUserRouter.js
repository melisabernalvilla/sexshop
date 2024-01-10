const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/apiUserController');

router.get('/', apiUserController.allUsers);
router.get('/:id', apiUserController.userById);

module.exports = router;
