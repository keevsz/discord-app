const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    discordID: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    guilds: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = model("User", userSchema)
