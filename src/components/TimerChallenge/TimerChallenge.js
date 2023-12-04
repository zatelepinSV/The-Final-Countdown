import classes from "./TimerChallenge.module.css";

export const TimerChallenge = ({ title, targetTime }) => {

  return (
    <section className={classes.challenge}>
      <h2 className={classes.difficulty}>{title}</h2>
      <p className={classes.challengeTime}>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button className={classes.challengeButton}>
          Start Challenge
        </button>
      </p>
      <p className="">
        Time is running / Timer in active
      </p>
    </section>
  );
};