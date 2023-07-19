require("dotenv").config()
const api = require("./api")

api(process.argv.splice(2).join(" ")).then(response => console.log(response))
