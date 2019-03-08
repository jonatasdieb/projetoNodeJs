const express = require('express');
const router = express.Router();
const controller = require('../controllers/custo-controller');
const authService = require('../services/auth-service');


router.get('/Get', authService.authorize, controller.get);
router.post('/Create', authService.authorize, controller.post);
router.get('/GetByFuncionarioId/:id', authService.authorize, controller.getByFuncionarioId);
router.get('/GetByDescricao/:descricao', authService.authorize, controller.getByDescricao);

module.exports = router;