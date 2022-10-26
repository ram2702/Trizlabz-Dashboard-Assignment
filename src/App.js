import React from "react";
import "./dashStyle.css";
import Grids from "./grids";
import Navbar from "./navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Grids />
    </div>
  );
}

export default App;
