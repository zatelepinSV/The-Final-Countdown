import classes from "./TimerChallenge.module.css";
import { useState, useRef } from "react";

export const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  const startTimerStartHandler = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  const stopTimerHandler = () => {
    clearTimeout(timer.current);
  }

  return (
    <section className={classes.challenge}>
      <h2 className={classes.title}>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className={classes.challengeTime}>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button className={classes.challengeButton} onClick={timerStarted ? stopTimerHandler : startTimerStartHandler}>
          {timerStarted ? 'Stop' : 'Start'} Start Challenge
        </button>
      </p>
      <p className={timerStarted ? classes.active : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer in active'}
      </p>
    </section>
  );
};