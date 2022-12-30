const mongoose = require("mongoose")

const pacienteSchema = require('../models/PacientesSchema')

const criarPaciente = async (req, res) => {
    const  {
        nome, telefone, endereco, plano_saude, plano_saude_numero
    } = req.body

    try {
        
        const paciente = new pacienteSchema({
            nome: nome.toUpperCase(),
            telefone: telefone.toUpperCase(),
            endereco: endereco.toUpperCase(),
            plano_saude: plano_saude.toUpperCase(),
            plano_saude_numero: plano_saude_numero
        })
        const salvarpaciente = await paciente.save();

        res.status(200).json({
            message: `Paciente cadastrado com sucesso`,
            paciente: salvarpaciente
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
const buscarpaciente = async(req , res) => {
    const { nome } = req.query
    let  query = {};
    if(nome) query.nome = new RegExp(nome , "i");
    try {
        const paciente = await pacienteSchema.find(query)
        res.status(200).json(paciente)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    criarPaciente,
    buscarpaciente
}