import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ x, y, onClose }) {
  const dropdownRef = useRef(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch("http://localhost:3000/characters");
        if (!response.ok) throw new Error("Could not fetch ");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Could not fetch characters. ", error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      style={{ top: y, left: x }}
    >
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
