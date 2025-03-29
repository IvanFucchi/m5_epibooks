import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import CommentArea from "./components/CommentArea";
import "./themeStyles.css"
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  console.log("tema attuale", theme);
  
  const [selectedAsin, setSelectedAsin] = useState(null);

  console.log("selectedAsin:", selectedAsin);
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme + "-theme"}>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Welcome />
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8">
              <AllTheBooks
                searchQuery={searchQuery}
                selectedAsin={selectedAsin}
                setSelectedAsin={setSelectedAsin}
              />
            </div>
            <div className="col-md-4">
              <CommentArea 
              asin={selectedAsin}
              setSelectedAsin={setSelectedAsin} />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;