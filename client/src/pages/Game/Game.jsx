import { useState, useEffect } from "react";
import styles from "./Game.module.css";
import { Dropdown } from "../../components/Dropdown/Dropdown.jsx";
import { TargetBox } from "../../components/TargetBox/TargetBox.jsx";
import { GameHeader } from "../../components/GameHeader/GameHeader.jsx";
import { VictoryModal } from "../../components/VictoryModal/VictoryModal.jsx";

export function Game() {
  const [clickPosition, setClickPosition] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [justClosed, setJustClosed] = useState(false);
  const [characters, setCharacters] = useState([
    { name: "Courage", found: false },
    { name: "Roger", found: false },
    { name: "Morty Jr.", found: false },
  ]);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const gameWon = characters.every((char) => char.found);

  function handleImageClick(e) {
    if (justClosed) {
      setJustClosed(false);
      return;
    }

    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickPosition({ x, y });
    console.log(
      `e.clientX: ${e.clientX} e.clientY: ${e.clientY} rect.left : ${rect.left} rect.top : ${rect.top}`,
    );
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    const actualX = Math.round(x * scaleX);
    const actualY = Math.round(y * scaleY);

    setCoordinates({ actualX, actualY });
    console.log("Coordinates:", actualX, actualY);
  }

  function closeMenu() {
    setClickPosition(null);
    setJustClosed(true);
  }

  useEffect(() => {
    if (gameWon) console.log("Game Won!");
  }, [gameWon]);

  async function handleScoreSubmit(username) {
    try {
      const response = await fetch("http://localhost:3000/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, time: time }),
      });
      if (!response.ok) throw new Error("Failed to add score.");
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={styles.image}>
      <div className={styles.gameContainer}>
        <GameHeader gameWon={gameWon} time={time} setTime={setTime} />
        <img
          src="/images/universe.jpeg"
          alt="scene"
          onClick={handleImageClick}
        />
        {clickPosition && (
          <>
            <TargetBox x={clickPosition.x} y={clickPosition.y} />
            <Dropdown
              x={clickPosition.x}
              y={clickPosition.y}
              onClose={closeMenu}
              actualX={coordinates.actualX}
              actualY={coordinates.actualY}
              characters={characters}
              setCharacters={setCharacters}
            />
          </>
        )}
        {gameWon && showModal && <VictoryModal onSubmit={handleScoreSubmit} />}
      </div>
    </section>
  );
}
