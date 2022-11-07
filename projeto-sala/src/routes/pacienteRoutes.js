const rotas = require("express").Router()
const controller = require("../controllers/pacienteController")

rotas.get("/paciente/:id", controller.buscarPacienteId)
rotas.get("/paciente", controller.buscarTodosPacientes)
rotas.post("/paciente", controller.criarPaciente)
rotas.delete("/paciente/:id", controller.deletarPaciente)
rotas.patch("/paciente/:id", controller.atualizarPaciente)



module.exports = rotas