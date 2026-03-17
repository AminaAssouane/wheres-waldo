import { useState } from "react";
import styles from "./Game.module.css";
import { Dropdown } from "../../components/Dropdown/Dropdown.jsx";
import { TargetBox } from "../../components/TargetBox/TargetBox.jsx";

export function Game() {
  const [clickPosition, setClickPosition] = useState(null);

  function handleImageClick(e) {
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

    console.log("Coordinates:", actualX, actualY);
  }

  function closeMenu() {
    setClickPosition(null);
  }

  return (
    <section className={styles.image}>
      <img src="/images/universe.jpeg" alt="scene" onClick={handleImageClick} />

      {clickPosition && (
        <>
          <TargetBox x={clickPosition.x} y={clickPosition.y} />
          <Dropdown
            x={clickPosition.x}
            y={clickPosition.y}
            onClose={closeMenu}
          />
        </>
      )}
    </section>
  );
}
