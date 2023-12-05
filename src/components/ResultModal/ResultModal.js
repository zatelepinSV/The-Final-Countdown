import classes from "./ResultModal.module.css";

export const ResultModal = ({ result, targetTime }) => {

  return (
    <dialog className={classes.result} open>
      <h2>Your {result}</h2>
      <p>The target time was <strong>{targetTime}</strong> seconds.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};