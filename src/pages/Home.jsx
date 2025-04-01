import { useState } from "react";
import Welcome from "../components/Welcome";
import LatestRelease from "../components/LatestRelease";
import CommentArea from "../components/CommentArea";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <div className={theme + "-theme"}>
      <Welcome />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-9">
            <LatestRelease
              searchQuery={searchQuery}
              selectedAsin={selectedAsin}
              setSelectedAsin={setSelectedAsin}
            />
          </div>
          <div className="col-md-3">
            <CommentArea
              asin={selectedAsin}
              setSelectedAsin={setSelectedAsin} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;