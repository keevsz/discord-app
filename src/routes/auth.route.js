const { Router } = require("express")
const router = Router()
const passport = require("passport")
const { isNotAuthorized, isAuthorized } = require("../utils/auth")

router.get("/", isNotAuthorized, passport.authenticate("discord")) //"discord" es estrategia creada por passport-discord
router.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
)
router.get("/logout", isAuthorized, (req, res) => {
  req.logout
  res.redirect("/")
})
module.exports = router
