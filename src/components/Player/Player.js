import { useState, useRef } from "react";
import classes from "./Player.module.css";

export const Player = () => {
  const playerName = useRef();
  const [userName, setUserName] = useState(null);

  const handleClick = () => {
    setUserName(playerName.current.value);
    playerName.current.value = null;
  }

  return (
    <section className={classes.player}>
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};