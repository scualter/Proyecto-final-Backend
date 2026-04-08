const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pokemonId: Number
});

module.exports = mongoose.model("Favorite", FavoriteSchema);