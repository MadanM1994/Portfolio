import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import FirstLine from "./components/fisrtLine";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <div>
          <Navbar />
        </div>
        <div className="other">
          <FirstLine />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
