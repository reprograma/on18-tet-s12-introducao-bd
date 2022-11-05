
const PacienteSchema = require("../models/PacienteSchema");

const criarPaciente = async (req, res) => {

//    const { nome, telefone, endereco, plano_saude, plano_saude_numero } = req.body

    try {
        const paciente = new PacienteSchema({
            nome: req.body.nome,
            telefone: req.body.telefone, 
            endereco: req.body.endereco, 
            plano_saude: req.body.plano_saude, 
            plano_saude_numero: req.body.plano_saude_numero
        })

        const salvarPaciente = await paciente.save();
        res.status(201).json({
            paciente: salvarPaciente
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })

    }
}


const buscarPaciente = async (req, res) => {
    const { nome } = req.query;

    
    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try{
        const pacientes = await PacienteSchema.find(query);
        res.status(200).json(pacientes)

    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}


const buscarPacientePorId = async (req, res) => {
    try {
        const paciente = await PacienteSchema.findById(req.params.id)
        res.status(200).json(paciente);

    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}


const deletarPaciente = async(req, res) =>{
    try{
        const paciente = await PacienteSchema.findById(req.params.id)

        await paciente.delete();

        res.status(200).json({
            mensagem: `Paciente removida do sistema.`
        })
    }catch(error){
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    criarPaciente,
    buscarPaciente,
    buscarPacientePorId, 
    deletarPaciente
}