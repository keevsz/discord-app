const { Router } = require("express")
const { isAuthorized } = require("../utils/auth")
const router = Router()

router.get("/", isAuthorized, (req, res) => {
  res.render("dashboard")
})

module.exports = router
