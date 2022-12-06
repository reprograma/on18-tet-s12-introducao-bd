const mongoose = require('mongoose')

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    plano_saude:{
        type: String,
        required: false
    },
    plano_saude_numero: {
        type: Number,
        required: false
    },

})

module.exports = mongoose.model('paciente', pacienteSchema)