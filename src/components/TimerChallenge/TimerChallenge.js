import { useState, useRef } from "react";
import { ResultModal } from "../ResultModal";
import classes from "./TimerChallenge.module.css";

export const TimerChallenge = ({title, targetTime}) => {
 const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef(null);
  const dialog = useRef(null);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  const startTimerStartHandler = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevState => prevState - 10);
    }, 10);
  }

  const stopTimerHandler = () => {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className={classes.challenge}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.challengeTime}>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button className={classes.challengeButton}
                  onClick={timerIsActive ? stopTimerHandler : startTimerStartHandler}>
            {timerIsActive ? 'Stop' : 'Start'} Start Challenge
          </button>
        </p>
        <p className={timerIsActive ? classes.active : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer in active'}
        </p>
      </section>
    </>
  );
};