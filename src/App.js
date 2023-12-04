import { Player } from "./components/Player";
import { TimerChallenge } from "./components/TimerChallenge";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <Player/>
      <div className={classes.challenges}>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Normal" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
};

export default App;
