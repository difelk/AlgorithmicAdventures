import React from "react";
import "./App.css";
import TopNav from "./components/topNav/TopNav";
import GameSelection from "./components/pages/gameSelectionPage";
import TicTacToe from "./components/pages/ticTacToe/TicTacToe";
import { Routes, Route } from "react-router-dom";
import TSP from "./components/pages/tsp/TSP";
import TowerOfHanoi from "./components/pages/towerOfHanoi/TowerOfHanoi";
import EightQueens from "./components/pages/eightQueens/EightQueens";
import KnightsTour from "./components/pages/knightsTour/KnightsTour";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<GameSelection />} />
        <Route path="/page/TicTacToe" element={<TicTacToe />} />
        <Route path="/page/TravelingSalesmanProblem" element={<TSP />} />
        <Route path="/page/TowerofHanoi" element={<TowerOfHanoi />} />
        <Route path="/page/EightQueens" element={<EightQueens />} />
        <Route path="/page/KnightsTour" element={<KnightsTour />} />
      </Routes>
    </div>
  );
}

export default App;
