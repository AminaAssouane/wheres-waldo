import { useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ x, y, onClose }) {
  const dropdownRef = useRef(null);

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

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      style={{ top: y, left: x }}
    >
      <p>Waldo</p>
      <p>Wizard</p>
      <p>Knight</p>
    </div>
  );
}
