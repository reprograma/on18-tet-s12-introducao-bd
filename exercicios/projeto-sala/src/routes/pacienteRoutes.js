const express = require('express');
const router = express.Router();

const controller = require('../controllers/pacienteController');

router.post('/criar', controller.criarPaciente)

module.exports = router;
