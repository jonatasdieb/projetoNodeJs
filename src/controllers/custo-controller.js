const repository = require('../repositories/custo-repository');

exports.get = (req, res) => {
    return repository.get()
        .then(data =>
            res.status(200).send(data))
        .catch(e =>
            res.status(400).send("Falha ao processar sua requisição " + e.message));
}

exports.post = (req, res) => {
    return repository.create(req.body)
        .then(() =>
            res.status(200).send("Despesa registrada com sucesso."))
        .catch((error) =>
            res.status(400).send(error.errors));
}

exports.getByFuncionarioId = (req, res) => {
    return repository.getByFuncionarioId(req.params.id)
        .then(data =>
            res.status(200).send(data))
        .catch(e =>
            res.status(400).send("Falha ao processar sua requisição " + e.message));
}

exports.getByDescricao = (req, res) => {
    return repository.getByDescricao(req.params.descricao)
        .then(data =>
            res.status(200).send(data))
        .catch(e =>
            res.status(400).send("Falha ao processar sua requisição " + e.message));
}
