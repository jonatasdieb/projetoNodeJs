const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SECURE, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SECURE);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token', 'authorization'];

    if (!token) {
        res.status(401).send({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SECURE, function (error, decoded) {
            if (error) {
                res.status(401).send(error);
            } else {
                next();
            }
        });
    }
};

