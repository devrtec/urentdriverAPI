'use strict';

const mongoose = require('mongoose');
const FieldOptionsValues = mongoose.model('FieldOptionsValues');

exports.get = async() => {
    const foValues = await FieldOptionsValues.find();
    return foValues;
}

exports.getById = async(id) => {
    const foValues = await FieldOptionsValues
        .findById(id);
    return foValues;
}

exports.create = async(data) => {
    var foValues = new FieldOptionsValues(data);
    await foValues.save();
}

exports.update = async(id, data) => {
    await FieldOptionsValues
        .findByIdAndUpdate(id, {
            $set: {desc: data.desc}});
}

exports.delete = async(id) => {
    await FieldOptionsValues
        .findOneAndRemove(id);
}