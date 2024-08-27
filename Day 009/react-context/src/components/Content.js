import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
        padding: "2rem",
        minHeight: "200px",
      }}
    >
      <h2>Welcome to my Theme Switcher</h2>
      <p>
        This part demonstrates the usage of context for providing theme to our
        application
      </p>
    </main>
  );
};
