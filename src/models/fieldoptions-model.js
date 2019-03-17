'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
    objeto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Objeto',
        required: true,      
        index: true
    },   
    nome: {
        type: String, 
        required: true,      
        trim: true,
        index: true,       
        unique: true      
    } 
},{ collection: 'FieldOptions' });

module.exports = mongoose.model('FieldOptions', schema);