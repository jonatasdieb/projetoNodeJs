const md5 = require('md5');
const authService = require('../services/auth-service');
const repository = require('../repositories/user-repository');

exports.login = async (req, res, next) => {
    try {
        const user = await repository.login({
            Username: req.body.username,
            Password: md5(req.body.password)
        });
        console.log(user);

        if (!user) {
            return res.status(404).send([{
                message: 'Usuário ou senha inválidos'
            }]);
        }

        //gera token de autenticação
        const token = await authService.generateToken({
            Username: user.Username
        });

        res.status(201).send({
            token: token,
            data: {
                username: user.Username
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = (req, res, next) => {
    if (req.body.password !== req.body.confirmPassword)
        return res.status(400).send([{
            message: "As senhas não conferem."
        }]);

    //verifica se o nome do usuário já existe no banco e efetua o cadastro caso não exista
    repository.getByUsername(req.body.username)
        .then((result) => {
            if (result) {
                return res.status(400).send([{
                    message: "Nome de usuário já existente."
                }]);
            }
            else {
                return repository.create({
                    Username: req.body.username,
                    Password: md5(req.body.password)
                })
                    .then(() =>
                        res.status(200).send("Usuário cadastrado com sucesso."))
                    .catch((error) =>
                        res.status(400).send(error.errors));
            }
        });

}

exports.refreshToken = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const user = await repository.getById(data.id);

        if (!user) {
            res.status(404).send({
                message: 'Usuário não encontrado'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            Username: user.Username
        });

        res.status(201).send({
            token: tokenData,
            data: {
                Username: user.Username
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};