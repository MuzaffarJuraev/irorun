import "./App.css";
import About from "./components/About/About";
import MouthHeadOne from "./components/MouthHeadOne/MouthHeadOne";
import MouthHeadTwo from "./components/MouthHeadTwo/MouthHeadTwo";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <MouthHeadOne />
      <MouthHeadTwo />
      <About />
    </div>
  );
}

export default App;
