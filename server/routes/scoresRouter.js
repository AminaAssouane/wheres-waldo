const { Router } = require("express");
const scoresRouter = Router();
const scoresController = require("../controllers/scoresController");

scoresRouter.get("/leaderboard", scoresController.getScores);
scoresRouter.post("/leaderboard", scoresController.postScore);

module.exports = scoresRouter;
