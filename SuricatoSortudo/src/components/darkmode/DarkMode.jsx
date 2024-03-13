import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Button
      variant="secondary"
      onClick={() => setDarkMode(!darkMode)}
      style={{ marginInline: 10 }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
}

export default DarkMode;
