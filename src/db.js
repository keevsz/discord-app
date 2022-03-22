const mongoose = require("mongoose")
const { URI } = require("./config")

const database = mongoose
  .connect(URI)
  .then((m) => {
    console.log("Conected to MongoDB")
    return m.connection.getClient()
  })
  .catch((e) => console.log("Falló la conexión: " + e))
