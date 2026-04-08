const Team = require("../models/Team");

exports.createTeam = async (req, res) => {
  const team = await Team.create({
    user: req.user.id,
    name: req.body.name,
    pokemons: req.body.pokemons
  });

  res.send(team);
};

exports.getTeams = async (req, res) => {
  const teams = await Team.find({ user: req.user.id });

  res.send(teams);
};