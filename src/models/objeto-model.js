'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({  
    nome: {
        type: String, 
        required: true,      
        trim: true,
        index: true,       
        unique: true      
    } 
},{ collection: 'Objeto' });

module.exports = mongoose.model('Objeto', schema);