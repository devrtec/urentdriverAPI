'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fo_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FieldOptions',
        required: true,      
        index: true
    },   
    desc: {
        type: String, 
        required: true,      
        trim: true,
        index: true,       
        unique: true      
    }
},{ collection: 'FieldOptionsValues' });

module.exports = mongoose.model('FieldOptionsValues', schema);