'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({  
    nome: {
        type: String, 
        required: true,      
        trim: true,
        index: true 
    },  
    sobrenome: {
        type: String, 
        required: true,      
        trim: true,
        index: true 
    },   
    email: {
        type: String, 
        required: true,      
        trim: true,
        index: true,       
        unique: true      
    },
    senha: {
        type: String, 
        required: true
    },         
    cel: {
        type: String, 
        required: true,      
        trim: true,
        index: true,       
        unique: true      
    },     
    cep: {
        type: String, 
        required: true,      
        trim: true,
        index: true 
    }, 
    logradouro: {
        type: String, 
        required: true,      
        trim: true,
        index: true     
    },        
    bairro: {
        type: String, 
        required: true,      
        trim: true,
        index: true     
    },     
    estado: {
        type: String, 
        required: true,      
        trim: true,
        index: true     
    },   
    municipio: {
        type: String, 
        required: true,      
        trim: true,
        index: true     
    },        
    status_fo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FieldOptionsValues',
        required: true,      
        index: true  
    },
    ins_date: {
        type: Date,
        index: true,
        required: true,
        default: Date.now
    },
    upd_date: {
        type: Date,
        index: true,
        required: true,
        default: Date.now
    }
},{ collection: 'Usuario' });

module.exports = mongoose.model('Usuario', schema);