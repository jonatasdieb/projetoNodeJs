const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const custoRoute = require('./routes/custo-route');
const funcionarioRoute = require('./routes/funcionario-route');
const departamentoRoute = require('./routes/departamento-route');
const userRoute = require('./routes/user-route')

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));


// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');    
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use('/', indexRoute);
app.use('/Funcionario', funcionarioRoute);
app.use('/Custo', custoRoute);
app.use('/Departamento', departamentoRoute);
app.use('/User', userRoute);

module.exports = app;