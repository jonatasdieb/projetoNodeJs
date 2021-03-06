const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionario-controller');
const authService = require('../services/auth-service');

router.get('/Get', authService.authorize, controller.get);
router.get('/GetByDepartamentoId/:id', authService.authorize, controller.getByDepartamentoId);
router.post('/Create', authService.authorize, controller.post);

module.exports = router;