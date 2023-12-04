import { Player } from "./components/Player";
import { TimerChallenge } from "./components/TimerChallenge";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <Player/>
      <div className={classes.challenges}>
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Easy" targetTime={1} />
      </div>
    </>
  );
};

export default App;
