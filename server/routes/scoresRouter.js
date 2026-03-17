const { Router } = require("express");
const scoresRouter = Router();
const scoresController = require("../controllers/scoresController");

scoresRouter.get("/", scoresController.getScores);
scoresRouter.post("/", scoresController.postScore);

module.exports = scoresRouter;
