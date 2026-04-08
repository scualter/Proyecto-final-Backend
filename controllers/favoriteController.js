const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res) => {
  const fav = await Favorite.create({
    user: req.user.id,
    pokemonId: req.body.pokemonId
  });

  res.send(fav);
};

exports.getFavorites = async (req, res) => {
  const favs = await Favorite.find({ user: req.user.id });

  res.send(favs);
};