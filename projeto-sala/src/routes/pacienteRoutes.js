//invoquei a controller
const controller = require("../controllers/pacienteController")

//invocar o express
const express = require("express")

//função de rotas do express
const router = express.Router()

//router.METODO(rota, função)
router.post("/criar", controller.criarPaciente)
router.get("/buscarPaciente", controller.buscarPaciente)

//exportar para ser usado no app.js
module.exports = router