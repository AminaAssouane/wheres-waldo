const db = require("../lib/queries");

function msToTime(ms) {
  const pad = (n) => n.toString().padStart(2, "0");
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.round((ms % 1000) / 10); // Round to 2 digits

  return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
}

async function getScores(req, res) {
  try {
    const scores = await db.getScores();
    const formattedScores = scores.map((score) => ({
      ...score,
      formattedTime: msToTime(score.time),
    }));

    res.json(formattedScores);
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
