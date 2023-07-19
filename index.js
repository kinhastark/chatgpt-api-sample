require("dotenv").config()
const express = require("express")
const cors = require('cors')
const api = require("./api")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/rest", async (req, res) => {
    const answer = await api(req.query.question)
    return res.json({ answer })
})

app.listen(3000)
