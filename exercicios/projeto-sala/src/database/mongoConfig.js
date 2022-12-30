
const mongoose = require("mongoose");  // exporta mongoose

const uri = process.env.MONGODB_URI;  // link do mongoodb


// essa função se conecta com o mongo
const connect = async() => {
    try {
        await mongoose.connect( uri ,
            {  // mongose se conect ao meu banco de dados
                useNewUriParcer : true ,
                useUnifiendTopology : true
    
            }
        )

        console.log("Banco de dados conectado")

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connect
}