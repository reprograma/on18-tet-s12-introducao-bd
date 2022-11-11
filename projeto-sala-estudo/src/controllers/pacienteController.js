const mongoose = require("mongoose")

const PacienteSchema = require("../models/PacienteSchema")

const criarPaciente = async(request, response) => {
    const { nome, telefone, endereco, plano_saude, plano_saude_numero } = request.body

    try {
        const paciente = new PacienteSchema({
            nome: nome, 
            telefone: telefone, 
            endereco: endereco, 
            plano_saude: plano_saude, 
            plano_saude_numero: plano_saude_numero
        })

        // esse método save é do mongoose, e ele salva esse paciente no banco de dados.
        const salvarPaciente = await paciente.save()

        response.status(201).json({
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

    let query = { }

    // regexp faz uma checagem e verifica se está de acordo

    if(nome) query.nome = new RegExp(nome, 'i')

    try {
        const paciente = await PacienteSchema.find(query)

        response.status(200).send(paciente)


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