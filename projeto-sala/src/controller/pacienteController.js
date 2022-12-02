const mongoose = require('mongoose')

const PacienteSchema = require("../models/PacienteSchema")

const criarPaciente = async(request, response) =>{
    const { nome, telefone, endereço, plano_saude, plano_saude_numero } = request.body

     try{
        const paciente = new PacienteSchema({
            nome: nome,
            telefone: telefone,
            endereço: endereço,
            plano_saude: plano_saude,
            plano_saude_numero: plano_saude_numero
        })

        const salvarPciente = await paciente.save()
        response.status(201).json({
            paciente: salvarPciente
        })

     }catch(error){
        response.status(400).json({
            message: error.message
        })
     }
}

module.exports = {
   criarPaciente
}