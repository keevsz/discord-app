function isAuthorized(req, res, next) {
  if (req.user) return next()
  res.redirect("/")
}

function isNotAuthorized(req, res, next) {
  if (req.user) return res.redirect("/dashboard")
  next()
}

module.exports = { isAuthorized, isNotAuthorized }
