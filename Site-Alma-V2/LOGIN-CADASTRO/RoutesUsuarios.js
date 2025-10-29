const express = require('express');
const router = express.Router();
const authController = require('./ControllerUsuarios');

router.post('/signup', authController.cadastrar);
router.post('/login', authController.entrar);

module.exports = router;