const repository = require('../repositories/departamento-repository');
var models = require('../models');
const departamento = models.Departamento;

exports.get = (req, res) => {
    return repository.get()
        .then(data => 
            res.status(200).send(data))
        .catch(e => 
            res.status(400).send("Falha ao processar sua requisição "+ e.message));
}

exports.post = (req, res) => {
    return repository.create(req.body)
        .then(() =>
            res.status(200).send("Departamento cadastrado com sucesso."))
        .catch((error) =>
            res.status(400).send(error.errors));
}




