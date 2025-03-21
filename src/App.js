import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheCeppaia from "./components/AllTheCeppaia";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheCeppaia />
      <MyFooter />
    </div>
  );
}

export default App;