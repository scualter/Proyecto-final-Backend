const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  pokemons: [Number]
});

module.exports = mongoose.model("Team", TeamSchema);