const rotas = require("express").Router()
const controller = require("../controllers/pacienteController")


rotas.post("/criar", controller.criarPaciente)
rotas.get("/buscar", controller.buscarPaciente)


module.exports = rotas