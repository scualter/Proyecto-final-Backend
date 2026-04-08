const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createTeam, getTeams } = require("../controllers/teamController");

router.post("/", auth, createTeam);
router.get("/", auth, getTeams);

module.exports = router;