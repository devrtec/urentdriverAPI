'use strict';
const repository = require('../repositories/usuario-repository');

let errors = [];

function Validation() {
    errors = [];
}

Validation.prototype.extsCel = async (value, message) => {
    const val = await repository.getByCel(value);
    if (val)
        errors.push({ message: message });        
}

Validation.prototype.extsEmail = async (value, message) => {
    const val = await repository.getByEmail(value);   
    if (val)
        errors.push({ message: message });
}

Validation.prototype.errors = () => {
    return errors;
}

Validation.prototype.clear = () => {
    errors = [];
}

Validation.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = Validation;