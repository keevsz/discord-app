const { DISCORD_CLIENT_SECRET, DISCORD_CLIENT_ID } = require("../config")
const User = require("../models/User")
const passport = require("passport")
const { Strategy } = require("passport-discord")

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  if (user) done(null, user)
})

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    async (accessTokenm, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ discordID: profile.id })
        if (user) return done(null, user)

        const newUser = new User({
          discordID: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        })
        await newUser.save()
        done(null, newUser)
      } catch (error) {
        console.log(error)
        return done(error, null)
      }
    }
  )
)
