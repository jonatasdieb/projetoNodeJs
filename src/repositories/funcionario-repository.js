var models = require('../models')
const funcionario = models.Funcionario;


exports.get = () => {    
    return funcionario.findAll({
        include: [{
            model: models.Departamento              
        }]
    });
}

exports.getByDepartamentoId = (id) => {   
    return funcionario.findAll({
        where: {                 
            DepartamentoId: id
        }        
    })
}

exports.create = (data) => {   
    return funcionario.create(data);       
}


