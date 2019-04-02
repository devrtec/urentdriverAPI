'use strict';

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = async() => {
    const usuario = await Usuario.find();
    return usuario;
}

exports.getById = async(id) => {
    const usuario = await Usuario
        .findById(id);
    return usuario;
}

exports.getByEmail = async(email) => {
    const usuario = await Usuario
        .findOne({email: email}).select('_id');            
    return usuario;   
}

exports.getByCel = async(cel) => {
    const usuario = await Usuario
        .findOne({cel: cel}).select('_id');            
    return usuario;   
}

exports.create = async(data) => {      
    var usuario = new Usuario(data);   
    await usuario.save();
    return usuario; 
}

exports.delete = async(id) => {
    await Usuario
        .findOneAndRemove(id);
}