import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AudioVideo } from "./pages/AudioVideo";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="audio-video" element={<AudioVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
