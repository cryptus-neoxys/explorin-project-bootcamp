import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <header
      className={`${
        theme === "light"
          ? "bg-slate-100 text-slate-900"
          : "bg-slate-900 text-slate-100"
      }`}
    >
      <h1>Theme Switcher App</h1>
    </header>
  );
};
