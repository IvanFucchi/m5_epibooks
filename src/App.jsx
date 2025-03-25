import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { useState } from "react";
import ThemeContext from "./ThemeContent";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [theme, setTheme] = useState("light");
  console.log("tema attuale", theme);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme}}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change theme (ora: {theme})
        </button>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      <AllTheBooks searchQuery={searchQuery} />
      <MyFooter />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;