'use strict';

const repository = require('../repositories/objeto-repository');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
}

exports.post = async(req, res, next) => {   
    try {    
        await repository.create({nome: req.body.nome});
        res.status(201).send();
    } catch (e) {      
        res.status(500).send({
            message: e.message
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send();
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send();
    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};