const express = require("express")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const MongoStore = require("connect-mongo")
const cors = require("cors")
const { URI, SECRET } = require("./config")
require("./strategies/discordStrategy")
const app = express()

//Settings
app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views")) // Path para compatibilidad
app.use(cors())

//Midlewares
app.use(
  session({
    secret: SECRET,
    name: "kvs-ds-oauth2",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: URI,
    }),
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())

//Global variables
app.use((req, res, next) => {
  app.locals.user = req.user
  next()
})

app.set("trust proxy", 1)

//Routes
app.use("/", require("./routes/index.routes"))
app.use("/auth", require("./routes/auth.route"))
app.use("/dashboard", require("./routes/dashboard.route"))

module.exports = app
