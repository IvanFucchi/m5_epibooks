import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [theme, setTheme] = useState("light");
  console.log("tema attuale", theme);

  return (
      <ThemeContext.Provider value={{ theme, setTheme}}>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      <AllTheBooks searchQuery={searchQuery} />
      <MyFooter />
      </ThemeContext.Provider>
  );
}

export default App;