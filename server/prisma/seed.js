const prisma = require("../lib/prisma");

async function main() {
  await prisma.character.createMany({
    data: [
      {
        name: "Courage",
        xMin: 638,
        xMax: 702,
        yMin: 1432,
        yMax: 1496,
      },
      {
        name: "Roger",
        xMin: 496,
        xMax: 555,
        yMin: 2455,
        yMax: 2519,
      },
      {
        name: "Morty Jr.",
        xMin: 1112,
        xMax: 1153,
        yMin: 448,
        yMax: 486,
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
