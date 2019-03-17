'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

exports.generateToken = async (data) => {
    return jwt.sign(data, config.akey, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, config.akey);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Access violation'
        });
    } else {
        jwt.verify(token, config.akey, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token invalid'
                });
            } else {
                next();
            }
        });
    }
};