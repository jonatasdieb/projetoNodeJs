const repository = require('../repositories/funcionario-repository');

exports.get = (req, res) => {
    return repository.get()
        .then(data =>
            res.status(200).send(data))
        .catch(e =>
            res.status(400).send("Falha ao processar sua requisição " + e.message));
}

exports.getByDepartamentoId = (req, res) => {
    return repository.getByDepartamentoId(req.params.id)
        .then(data =>
            res.status(200).send(data))
        .catch(e =>
            res.status(400).send("Falha ao processar sua requisição " + e.message));
}

exports.post = (req, res) => {
    return repository.create(req.body)
        .then(() =>
            res.status(200).send("Funcionário cadastrado com sucesso."))
        .catch((error) =>
            res.status(400).send(error.errors));
}