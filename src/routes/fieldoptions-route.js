'use strict';

const express = require('express');
const controller = require('../controllers/fieldoptions-controller');

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;