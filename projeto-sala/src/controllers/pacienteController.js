const mongoose = require("mongoose");

const PacienteSchema = require("../models/PacienteSchema");

const criarPaciente = async(requisicao, resposta) => {
    const { nome, telefone, endereco, plano_saude, plano_saude_numero } = requisicao.body;

    try {
        const paciente = new PacienteSchema({
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            plano_saude: plano_saude,
            plano_saude_numero: plano_saude_numero

        })

        const salvarPaciente = await paciente.save();
        resposta.status(201).json({
            message: "Novo paciente cadastrado com sucesso!",
            paciente: salvarPaciente
        })
        
    } catch (error) {
        resposta.status(400).json({
            message: error.message
        })
    }
}

const buscarPaciente = async (req, res) => {
    const { nome } = req.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try {
        const pacientes = await PacienteSchema.find(query);
        res.status(200).json(pacientes)
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    criarPaciente,
    buscarPaciente
}