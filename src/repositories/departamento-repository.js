var models = require('../models');
const departamento = models.Departamento;

exports.get = () => {
    return departamento.findAll();
}

exports.create = (data) => {
   return departamento.create(data);
}



