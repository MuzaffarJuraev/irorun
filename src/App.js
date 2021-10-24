import "./App.css";
import About from "./components/About/About";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer/Footer";
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
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;
