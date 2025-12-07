import React, { useState } from "react";
import "./App.css"; // Styles for App and global elements, including the overlay
import Explore from "./explore";

const App = () => {
  const [showExplore, setShowExplore] = useState(false);

  const handleExploreClick = () => {
    setShowExplore(true);
  };

  // Function to close the Explore overlay
  const handleCloseExplore = () => {
    setShowExplore(false);
  };

  return (
    <div className="App-container">
      {/* Homepage/root content */}
      <h1 className="main-title">Spr1ngChkn</h1>
      <p className="main-description">Games. Tech. Code.</p>
      {/* Added a specific class to the main action button */}
      <button className="main-action-button" onClick={handleExploreClick}>::beekawwwk::</button>

      {/* Explore component rendered as a floating slide */}
      {showExplore && <Explore onClose={handleCloseExplore} />}
    </div>
  );
};

export default App;