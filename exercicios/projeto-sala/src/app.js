require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const rotasPacientes = require("./router/clinicaRouter")

const db = require("./database/mongoConfig");  //coloquei mongoConfig dentro de app.js

app.use(express.json());

app.use(cors());

app.use(rotasPacientes)

db.connect();   // app vc vai se conectar ao banco de dados tá . O db é só uma variavel para chamar o cenect





module.exports = app
