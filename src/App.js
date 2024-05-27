import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="mb-5">
        <ThemeButton/>
        </div>
      <Card/>
    </div>
  </ThemeProvider>
  );
}

export default App;
