'use strict';
const ValidationCommon = require('../validators/common-validator');
const ValidationUsuario = require('../validators/usuario-validator');
const repository = require('../repositories/usuario-repository');

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
        //aguardando validação
        req.body.status_fo = "5c9152b564856719b4c5b6aa";

        let validCommon = new ValidationCommon();      
        
        validCommon.isRequired(req.body.nome, "Nome obrigatório");
        validCommon.isRequired(req.body.sobrenome, "Sobrenome obrigatório");
        validCommon.isRequired(req.body.email, "E-mail obrigatório");
        validCommon.isRequired(req.body.senha, "Senha obrigatório");
        validCommon.isRequired(req.body.cel, "Celular obrigatório");
        validCommon.isRequired(req.body.cep, "CEP obrigatório");
        validCommon.isRequired(req.body.logradouro, "Logradouro obrigatório");
        validCommon.isRequired(req.body.bairro, "Bairro obrigatório");
        validCommon.isRequired(req.body.estado, "Estado obrigatório");
        validCommon.isRequired(req.body.municipio, "Município obrigatório");
        validCommon.isEmail(req.body.email, "E-mail inválido");
      
        if (!validCommon.isValid()) {
            res.status(400).send(validCommon.errors()).end();
            return;
        } 
        
        let validUsuario = new ValidationUsuario();

        await validUsuario.extsCel(req.body.cel, "Celular já existe");
        await validUsuario.extsEmail(req.body.email, "E-mail já existe");      
        
        if (!await validUsuario.isValid()) {
            res.status(400).send(validUsuario.errors()).end();
            return;
        }      
       
        let usuario = await repository.create({ 
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            senha: req.body.senha,
            cel: req.body.cel,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            estado: req.body.estado,
            municipio: req.body.municipio,
            status_fo: req.body.status_fo,              
        }); 

        res.status(201).send(usuario);
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