const db = require("../lib/queries");

async function getCharacters(req, res) {
  try {
    const characters = await db.getCharacters();
    if (!characters) {
      return res.status(404).json({ error: "Failed to fetch characters" });
    }
    res.json(characters);
  } catch (error) {
    console.error("Failed to fetch characters. ", error);
    res.status(500).json({ error: "Failed to fetch characters." });
  }
}

async function checkCharacter(req, res) {
  try {
    const { name, x, y } = req.query;
    if (!name || x === undefined || y === undefined) {
      return res.status(400).json({ error: "Missing parameters" });
    }
    const result = await db.checkCharacter(name, Number(x), Number(y));
    res.json({ character: name, correct: result });
  } catch (error) {
    console.error("Failed to check character's position. ", error);
    res.status(500).json({ error: "Failed to check character's postition." });
  }
}

module.exports = { getCharacters, checkCharacter };
