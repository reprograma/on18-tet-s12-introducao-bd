const rotas = require("express")
const controller = require("../controller/clinicaController")

rotas.post("/criar" , controller.criarPaciente)
rotas.length("/buscar", controller.buscarpaciente)

module.exports = rotas
