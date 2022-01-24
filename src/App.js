import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import "./index.css";
import Feedback from "./pages/Feedback";
import Main from "./pages/Main";
import Nutm from "./pages/Nutm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nutm" element={<Nutm />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
