import { useState } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css";
import "./themeStyles.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gigio from "./pages/Gigio"
import Home from "./pages/Home"
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import SingleBook from "./components/SingleBook";
import BookDetails from "./components/BookDetails";
import Book from "./pages/Book";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home theme={theme} searchQuery={searchQuery}/>} />
          <Route path="/gigio" element={<Gigio />} />
          <Route path="/books/:id" element={<Book/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </ThemeContext.Provider>
  );
}

export default App;