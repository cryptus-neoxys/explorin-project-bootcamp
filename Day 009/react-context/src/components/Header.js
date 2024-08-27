import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333333",
        color: theme === "light" ? "#333333" : "#f0f0f0",
      }}
    >
      <h1>Theme Switcher App</h1>
    </header>
  );
};
