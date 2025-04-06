import React, { useEffect, useState } from "react";
import styles from "./GameCard.module.scss";
import GameCard from "./GameCard";
import TicTacToeIcon from "../../../assets/icons/svg/TicTacToe.icon";
import QueenIcon from "../../../assets/icons/svg/Queen.icon";
import KnightIcon from "../../../assets/icons/svg/Knight.icon";
import TowerOfHanoiIcon from "../../../assets/icons/svg/ToH.icon";
import TspIcon from "../../../assets/icons/svg/Tsp.icon";
import { useNavigate } from "react-router-dom";

export type gameDataProps = {
  id: number;
  value: string;
  text: string;
  icon?: any;
  background?: string;
  description?: string;
};

type GameSelectionProps = {};

const GameSelection = ({}: GameSelectionProps) => {
  const navigate = useNavigate();
  const [gameData, setGameDate] = useState<gameDataProps[]>([
    {
      id: 1,
      value: "ttt",
      text: "Tic Tac Toe",
      icon: <TicTacToeIcon size={40} />,
      background: "#cdffff",
      description:
        "Tic Tac Toe: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      value: "tsp",
      text: "Traveling Salesman Problem",
      icon: <TspIcon size={40} />,
      background: "#fdf0db",
      description:
        "Traveling Salesman Problem: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      value: "toh",
      text: "Tower of Hanoi",
      icon: <TowerOfHanoiIcon size={40} />,
      background: "#e4fef0",
      description:
        "Tower of Hanoi: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      value: "eq",
      text: "Eight Queens",
      icon: <QueenIcon size={40} />,
      background: "#e4fbfe",
      description:
        "Eight Queens: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      value: "kt",
      text: "Knights Tour",
      icon: <KnightIcon size={40} />,
      background: "#e7fec7",
      description:
        "Knights Tour: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const [selectedGame, setSelectedGame] = useState<gameDataProps>();

  useEffect(() => {
    switch (selectedGame?.value) {
      case "ttt":
        navigate("/page/TicTacToe");
        break;
      case "tsp":
        navigate("/page/TravelingSalesmanProblem");
        break;
      case "toh":
        navigate("/page/TowerofHanoi");
        break;
      case "eq":
        navigate("/page/EightQueens");
        break;
      case "kt":
        navigate("/page/KnightsTour");
        break;
      default:
        navigate("/");
        break;
    }
  }, [selectedGame]);

  return (
    <div className={styles.container}>
      <div className={styles.subContianerWrapper}>
        <h5>{selectedGame ? selectedGame.text : "Select a Game"}</h5>
        <p className={styles.subText}>
          {selectedGame
            ? selectedGame.description
            : "Choose a game to explore algorithms through interactive challenges and puzzles."}
        </p>
      </div>
      <div className={styles.gamesListWrapper}>
        {gameData &&
          gameData.length &&
          gameData.map((items, index) => (
            <GameCard
              data={items}
              getSelected={(data) => {
                setSelectedGame(data);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default GameSelection;
