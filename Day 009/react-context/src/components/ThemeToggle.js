import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</button>
  );
};
