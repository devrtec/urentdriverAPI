'use strict';

const mongoose = require('mongoose');
const FieldOptions = mongoose.model('FieldOptions');

exports.get = async() => {
    const fo = await FieldOptions.find();
    return fo;
}

exports.getById = async(id) => {
    const fo = await FieldOptions
        .findById(id);
    return fo;
}

exports.create = async(data) => {
    var fo = new FieldOptions(data);
    await fo.save();
}

exports.update = async(id, data) => {
    await FieldOptions
        .findByIdAndUpdate(id, {
            $set: {nome: data.nome}
        });
}

exports.delete = async(id) => {
    await FieldOptions
        .findOneAndRemove(id);
}