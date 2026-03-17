const { Router } = require("express");
const charactersRouter = Router();
const charactersController = require("../controllers/charactersController");

charactersRouter.get("/check", charactersController.checkCharacter);
charactersRouter.get("/", charactersController.getCharacters);

module.exports = charactersRouter;
