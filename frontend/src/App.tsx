import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/topNav/TopNav";
import GameSelection from "./components/pages/gameSelectionPage";

function App() {
  return (
    <div className="App">
      <TopNav />
      <GameSelection />
    </div>
  );
}

export default App;
