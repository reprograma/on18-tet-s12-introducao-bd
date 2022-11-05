const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    plano_saude: {
        type: String,
        required: true
    },
    plano_saude_numero: {
        type: Number, 
        required: false
    }
}, { timestamps : true });

module.exports = mongoose.model("paciente", pacienteSchema);