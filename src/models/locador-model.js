'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({  
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,      
        index: true
    },   
    pessoatipo: {
        type: String,             
        trim: true,
        index: true 
    },   
    cpfcnpj: {
        type: String,          
        trim: true,
        index: true      
    },   
    empresa: {
        type: String,          
        trim: true,
        index: true      
    },   
    tel: {
        type: String,          
        trim: true,
        index: true      
    }      
},{ collection: 'Locador' });

module.exports = mongoose.model('Locador', schema);