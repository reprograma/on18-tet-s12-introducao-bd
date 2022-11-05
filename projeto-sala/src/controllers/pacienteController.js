const mongoose = require('mongoose');
const PacienteSchema = require('../models/PacienteSchema');
const verificarItens = require('../utils/servico')

const criarPaciente = async (request, response) => {
    const { nome, telefone, endereco, plano_saude, plano_saude_numero } = request.body;
    if (verificarItens.verificarItensObrigatorios(request.body)) {
        return response.json({ message: verificarItens.verificarItensObrigatorios(request.body) })
    }
    if (verificarItens.validarPlanoDeSaude(request.body)) {
        return response.json({ message: verificarItens.validarPlanoDeSaude(request.body) })
    }
    const pacientes = await PacienteSchema.find({ plano_saude_numero: request.body.plano_saude_numero })
    if (pacientes) return response.status(400).send({ message: `Não é possível cadastrar esse número de plano novamente` })
    try {
        const paciente = new PacienteSchema({
            nome: nome.toUpperCase(),
            telefone: telefone.toUpperCase(),
            endereco: endereco.toUpperCase(),
            plano_saude: plano_saude.toUpperCase(),
            plano_saude_numero: plano_saude_numero
        })
        const salvarPaciente = await paciente.save();
        response.status(200).json({
            message: `Paciente cadastrado com sucesso`,
            paciente: salvarPaciente
        })
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

const buscarPaciente = async (request, response) => {
    const { nome } = request.query
    let query = {};
    if (nome) query.nome = new RegExp(nome, 'i');
    try {
        const pacientes = await PacienteSchema.find(query)
        response.status(200).json(pacientes)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}



module.exports = {
    criarPaciente,
    buscarPaciente
}

//retornar msg de ser obrigatório para nome,endereço e telefone ok
//tratar o dado p não diferenciar letras maiusculas das minusculas ok
//se preencher plano de saude , ser obrigatorio o numero do plano ok
//se já tiver o numero de plano cadastrado não permitir cadastrar novamente