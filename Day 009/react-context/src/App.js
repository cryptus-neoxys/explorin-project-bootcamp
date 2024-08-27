import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
