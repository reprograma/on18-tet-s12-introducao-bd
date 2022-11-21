const controller = require("../controllers/pacienteController");
const router = require("express").Router();

//router.METODO(rota, função)

router.get("/buscarpaciente/:id", controller.buscarPacienteId)
router.get("/buscartodos", controller.buscarTodosPacientes)
router.post("/criar", controller.criarPaciente)
router.delete("/:id", controller.deletarPaciente)
router.patch("/:id", controller.atualizarPaciente)

//exportar para ser usado no app.js
module.exports = router;
