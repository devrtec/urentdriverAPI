"use strict";
const ValidationCommon = require("../validators/common-validator");
const ValidationUsuario = require("../validators/usuario-validator");
const repository = require("../repositories/usuario-repository");
const emailService = require("../services/email-service");
const emailTemplate = require("../templates/confirmar-email");
const config = require("../config");

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    //ativo
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

    console.log("validCommon", validCommon.isValid());
    if (!validCommon.isValid()) {
      res
        .status(400)
        .send(validCommon.errors())
        .end();
      return;
    }

    let validUsuario = new ValidationUsuario();

    validUsuario.extsCel(req.body.cel, "Celular já existe");
    //validUsuario.extsEmail(req.body.email, "E-mail já existe");

    var teste = validUsuario.isValid();
    console.log(teste);

    // console.log("validUsuario", validUsuario.isValid());
    // if (!validUsuario.isValid()) {
    //     res.status(400).send(validUsuario.errors()).end();
    //     return;
    // }

    await repository.create({
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
      status_fo: req.body.status_fo
    });

    // //E-mail validation
    //  emailService.sendMailUser(
    //     req.body.email,
    //     emailTemplate.subject,
    //     emailTemplate.body
    //     .replace('{0}', req.body.nome)
    //     .replace('{1}', config.urlbase + 'contas/05OkENlBX/'+ conta._id));

    // //E-mail admin
    // emailService.sendMailAdmin(
    //     'R-Finan: Aguardando validação',
    //     ('<p>{0}<p>').replace('{0}',req.body.email));

    res.status(201).send();
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    await repository.updateStatus(req.params.id, "5c0510338d7cfa1ba0f4d7b0");
    res.status(201).send(emailTemplate.resp);

    //E-mail admin
    emailService.sendMailAdmin(
      "R-Finan: E-mail validado",
      "<p>{0}<p>".replace("{0}", req.params.id)
    );
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id);
    res.status(200).send();
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send();
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
