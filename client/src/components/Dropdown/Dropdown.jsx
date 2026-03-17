import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ x, y, onClose, actualX, actualY }) {
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

  async function handleGuess(name, actualX, actualY) {
    try {
      onClose();
      const response = await fetch(
        `http://localhost:3000/characters/check?name=${name}&x=${actualX}&y=${actualY}`,
      );
      if (!response.ok) throw new Error("Could not check character");
      const data = await response.json();
      if (data.correct) alert("You found a character");
      else alert("Try again");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      style={{ top: y, left: x }}
    >
      <p onClick={() => handleGuess("Courage", actualX, actualY)}>
        <img src="/images/item1.jpg" alt="" /> <span>Courage</span>
      </p>
      <p onClick={() => handleGuess("Roger", actualX, actualY)}>
        <img src="/images/item2.jpg" alt="" /> <span>Roger</span>
      </p>
      <p onClick={() => handleGuess("Morty Jr.", actualX, actualY)}>
        <img src="/images/item3.jpg" alt="" /> <span>Morty Jr.</span>
      </p>

      {/* {characters.map((character) => (
        <p
          key={character.id}
          onClick={() => handleGuess(character.name, actualX, actualY)}
        >
          {character.name}
        </p>
      ))} */}
    </div>
  );
}
