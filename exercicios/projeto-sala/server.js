require("dotenv").config()  // O dotenv vem aqui para ler a variavel PORT e saber que ela está dentro do arquivo .env



const app = require("./src/app")

const PORT = process.env.PORT ;

app.get("/" , function(req ,res) {
    res.send({
        message : "Primeiro get"
    })
})

app.listen(PORT, ()=> 
console.log(`Rodando na porta ${PORT}`))


