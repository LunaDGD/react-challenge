import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Page from "./Page";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/page" element={<Page />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
