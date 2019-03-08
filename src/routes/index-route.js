const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

router.get('/', authService.authorize, (req, res, next) => {    
    res.status(200).send({
        title: "Node  API",
        version: "1.0.0"
    });
});

module.exports = router;