const app = require("./src/app")
const { PORT } = require("./src/config")
require("./src/db")

app.listen(PORT)
console.log("Port: " + PORT)
