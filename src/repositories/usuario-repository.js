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

exports.create = async(data) => {
    var usuario = new Usuario(data);   
    await usuario.save();
}

exports.updateStatus = async(id, status) => {
    await Usuario
        .findByIdAndUpdate(id, {
            $set: {                
                status_fo: status, 
                upd_date: new Date(Date.now()).toISOString()
            }
        });
}

exports.delete = async(id) => {
    await Usuario
        .findOneAndRemove(id);
}