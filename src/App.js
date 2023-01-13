import React from "react";
import Home from "./home";
import "./App.css";
import logo from './logo.svg';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home logo={logo} logo1={logo1} logo2={logo2} logo3={logo3} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;