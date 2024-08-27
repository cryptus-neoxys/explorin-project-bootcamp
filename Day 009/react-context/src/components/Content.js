import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light"
          ? "bg-slate-100 text-slate-900"
          : "bg-slate-900 text-slate-100"
      } p-2 min-h-48:`}
    >
      <h2>Welcome to my Theme Switcher</h2>
      <p>
        This part demonstrates the usage of context for providing theme to our
        application
      </p>
    </main>
  );
};
