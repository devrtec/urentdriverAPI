'use strict';

const express = require('express');
const controller = require('../controllers/usuario-controller');
const authService = require('../services/auth-service');

const router = express.Router();

/*router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);
router.put('/:id', authService.authorize, controller.put);
router.delete('/:id', authService.authorize, controller.delete);*/

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
//router.get('/05OkENlBX/:id', controller.updateStatus);
//router.delete('/:id', controller.delete);

module.exports = router;