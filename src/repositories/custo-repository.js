const Sequelize = require('sequelize');
var models = require('../models');
const custo = models.Custo;
const Op = Sequelize.Op;

exports.get = () => {    
    return custo.findAll({
        include: [{
            model: models.Departamento
        },
        {
            model: models.Funcionario
        }]
    });
}

exports.create = (data) => {
  return  custo.create(data);
}

exports.getByFuncionarioId = (id) => {
    return custo.findAll({
        include: [{
            model: models.Departamento
        },
        {
            model: models.Funcionario
        }],
        where: {
            FuncionarioId: id
        }
    });
}

exports.getByDescricao = (descricao) => {
    return custo.findAll({
        include: [{
            model: models.Departamento
        },
        {
            model: models.Funcionario
        }],
        where: {
            Descricao: {
                [Op.like]: '%'+descricao+'%'
            }
        }
    });
}

