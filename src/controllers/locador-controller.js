'use strict';
const ValidatioUsuario = require('../validators/usuario-validator');
const ValidatioLocador = require('../validators/locador-validator');
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
        let validusuario = new ValidatioUsuario();
        await validusuario.noExtsId(req.body.id_user, "Usuário não existe");       
        
        if (!await validusuario.isValid()) {            
            res.status(400).send(validusuario.errors()).end();
            return;
        }      

        let validLocador = new ValidatioLocador();
        await validLocador.extsId_user(req.body.id_user, "Locador já existe");       
        
        if (!await validLocador.isValid()) {
            res.status(400).send(validLocador.errors()).end();
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