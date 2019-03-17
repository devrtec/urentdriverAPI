'use strict';

const mongoose = require('mongoose');
const Objeto = mongoose.model('Objeto');

exports.get = async() => {
    const obj = await Objeto.find();   
    return obj;
}

exports.getById = async(id) => {
    const obj = await Objeto
        .findById(id);
    return obj;
}

exports.create = async(data) => {
    var obj = new Objeto(data);
    await obj.save();
}

exports.update = async(id, data) => {
    await Objeto
        .findByIdAndUpdate(id, {
            $set: {nome: data.nome}
        });
}

exports.delete = async(id) => {
    await Objeto
        .findOneAndRemove(id);
}