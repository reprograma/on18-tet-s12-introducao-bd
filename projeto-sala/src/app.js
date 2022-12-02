require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const db = require('./database/mongoConfig')

app.use(express.json())
app.use(cors())
db.connect();


module.exports = app