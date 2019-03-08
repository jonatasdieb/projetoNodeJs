const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

router.post('/Login', controller.login);
router.post('/Cadastrar', controller.post);

module.exports = router;