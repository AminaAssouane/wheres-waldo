const prisma = require("./prisma");

// CHARACTERS
async function getCharacter(name) {
  return await prisma.character.findUnique({ where: { name } });
}

async function checkCharacter(name, x, y) {
  const character = await getCharacter(name);
  if (!character) return false;
  return (
    x >= character.xMin &&
    x <= character.xMax &&
    y >= character.yMin &&
    y <= character.yMax
  );
}

// SCORES
async function getScores() {
  return await prisma.score.findMany({ orderBy: { time: "asc" } });
}

async function postScore(username, time) {
  return await prisma.score.create({ data: { username, time: Number(time) } });
}

module.exports = { getCharacter, checkCharacter, getScores, postScore };
