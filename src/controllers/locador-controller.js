'use strict';
const ValidatioUsuario = require('../validators/usuario-validator');
const repository = require('../repositories/locador-repository');

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

exports.post = async(req, res, next) => {  
   
    try {  
        let validUsuario = new ValidatioUsuario();
        await validUsuario.extsId(req.body.id_user, "Usuário não existe");       
        
        if (!await validUsuario.isValid()) {
            res.status(400).send(validUsuario.errors()).end();
            return;
        }      
       
        let locador = await repository.create({ 
            id_user: req.body.id_user                  
        });

        res.status(201).send(locador);
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