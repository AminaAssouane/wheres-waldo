const prisma = require("./prisma");

// CHARACTERS
async function getCharacters() {
  return await prisma.character.findMany({ orderBy: { id: "asc" } });
}

async function getCharacterByName(name) {
  return await prisma.character.findUnique({ where: { name } });
}

async function checkCharacter(name, x, y) {
  const character = await getCharacterByName(name);
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

module.exports = { getCharacters, checkCharacter, getScores, postScore };
