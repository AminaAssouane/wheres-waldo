import { useState } from "react";
import styles from "./Game.module.css";
import { Dropdown } from "../../components/Dropdown/Dropdown.jsx";

export function Game() {
  const [menuPosition, setMenuPosition] = useState(null);

  function handleImageClick(e) {
    const rect = e.target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMenuPosition({ x, y });
  }

  function closeDropdown() {
    setMenuPosition(null);
  }

  return (
    <section className={styles.image} onClick={handleImageClick}>
      <img src="/images/universe.jpeg" alt="scene" />

      {menuPosition && (
        <Dropdown
          x={menuPosition.x}
          y={menuPosition.y}
          onClose={closeDropdown}
        />
      )}
    </section>
  );
}
