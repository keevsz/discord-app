require("dotenv").config()

module.exports.URI = process.env.URI
module.exports.PORT = process.env.PORT || 3000
module.exports.DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
module.exports.DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET
module.exports.SECRET = process.env.SECRET
