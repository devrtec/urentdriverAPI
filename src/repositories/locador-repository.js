'use strict';

const mongoose = require('mongoose');
const Locador = mongoose.model('Locador');

exports.get = async() => {
    const Locador = await Locador.find();
    return locador;
}

exports.getById_user = async(id_user) => {   
    const locador = await Locador
        .findOne({id_user: id_user});       
        return locador;   
}

exports.create = async(data) => {      
    var locador = new Locador(data);   
    await locador.save();
    return locador; 
}

exports.delete = async(id) => {
    await Locador
        .findOneAndRemove(id);
}