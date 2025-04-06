import React from "react";
import { gameDataProps } from ".";
import styles from "./GameCard.module.scss";

type GameCardProps = {
  data: gameDataProps;
  getSelected: (data: gameDataProps) => void;
};

const GameCard = ({ data, getSelected }: GameCardProps) => {
  return (
    <button
      type="button"
      className={styles.gameCardwrapper}
      onClick={() => getSelected(data)}
    >
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: data.background }}
      >
        {data.icon ?? ""}
      </div>
      <div className={styles.gameTitle}>{data.text}</div>
    </button>
  );
};

export default GameCard;
