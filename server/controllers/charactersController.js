const db = require("../lib/queries");

async function getCharacter(req, res) {
  try {
    const { name } = req.params;
    const character = await db.getCharacter(name);
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    console.error("Failed to fetch character's position. ", error);
    res.status(500).json({ error: "Failed to fetch character's postition." });
  }
}

async function checkCharacter(req, res) {}

module.exports = { getCharacter, checkCharacter };
