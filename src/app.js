'use strict'

//import
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

//object
const app = express();
const router = express.Router();

//connect
mongoose.connect(config.connectdb);

//config
app.use(bodyparser.json({limit: '5mb'}));
app.use(bodyparser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//model
const usuario = require('./models/usuario-model');
const objeto = require('./models/objeto-model');
const fieldoptions = require('./models/fieldoptions-model');
const fieldoptionsvalues = require('./models/fieldoptionsvalues-model');
const locador = require('./models/locador-model');

//route
const indexRoute = require('./routes/index-route');

const usuarioRoute = require('./routes/usuario-route');
const objetoRoute = require('./routes/objeto-route');
const fieldoptionsRoute = require('./routes/fieldoptions-route');
const fieldoptionsvaluesRoute = require('./routes/fieldoptionsvalues-route');
const locadorRoute = require('./routes/locador-route');

//main
app.use('/', indexRoute);
app.use('/usuarios', usuarioRoute);
app.use('/objetos', objetoRoute);
app.use('/fieldoptions', fieldoptionsRoute);
app.use('/fieldoptionsvalues', fieldoptionsvaluesRoute);
app.use('/locadores', locadorRoute);

module.exports = app;