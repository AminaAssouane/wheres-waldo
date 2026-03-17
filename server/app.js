require("dotenv/config");
const express = require("express");
const charactersRouter = require("./routes/charactersRouter");
const scoresRouter = require("./routes/scoresRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/characters", charactersRouter);
app.use("/leaderboard", scoresRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) console.error("Error occured : ", error);
  else console.log(`Server running on port ${PORT}`);
});
