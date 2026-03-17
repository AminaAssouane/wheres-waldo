const db = require("../lib/queries");

async function getScores(req, res) {
  try {
    const scores = await db.getScores();
    res.json(scores);
  } catch (error) {
    console.error("Failed to fetch scores. ", error);
    res.status(500).json({ error: "Failed to fetch scores." });
  }
}

async function postScore(req, res) {
  try {
    const { username, time } = req.body;
    if (!username || !time) {
      return res.status(400).json({ error: "Username and time are required." });
    }
    const score = await db.postScore(username, time);
    res.status(201).json(score);
  } catch (error) {
    console.error("Failed to post score. ", error);
    res.status(500).json({ error: "Failed to post score." });
  }
}

module.exports = { getScores, postScore };
