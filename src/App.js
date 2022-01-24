import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Feedback from "./pages/Feedback";
import Main from "./pages/Main";
import Nutm from "./pages/Nutm";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nutm" element={<Nutm />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </Router>
  );
}

export default App;
