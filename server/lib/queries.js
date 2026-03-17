const prisma = require("./prisma");

// SCORES
async function getScores() {
  return await prisma.score.findMany({ orderBy: { time: "asc" } });
}

async function postScore(username, time) {
  return await prisma.score.create({ data: { username, time: Number(time) } });
}

module.exports = { getScores, postScore };
