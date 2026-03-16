import { useState } from "react";
import styles from "./Game.module.css";
import { Dropdown } from "../../components/Dropdown/Dropdown.jsx";
import { TargetBox } from "../../components/TargetBox/TargetBox.jsx";

export function Game() {
  const [clickPosition, setClickPosition] = useState(null);

  function handleImageClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickPosition({ x, y });
  }

  function closeMenu() {
    setClickPosition(null);
  }

  return (
    <section className={styles.image} onClick={handleImageClick}>
      <img src="/images/universe.jpeg" alt="scene" />

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
