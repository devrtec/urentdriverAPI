'use strict';
const repository = require('../repositories/locador-repository');

let errors = [];

function Validation() {
    errors = [];
}

Validation.prototype.extsId_user = async (value, message) => {   
    const val = await repository.getById_user(value);   
    if (val)
        errors.push({ message: message });        
}

Validation.prototype.errors = () => {
    return errors[0];
}

Validation.prototype.clear = () => {
    errors = [];
}

Validation.prototype.isValid = async() => {
    return await errors.length == 0;
}

module.exports = Validation;