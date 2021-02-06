const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

router.route('/register').post(UsersController.register);

router.route('/login').post(UsersController.login);

router.route('/').get(UsersController.getAllUsers);

module.exports = router;
