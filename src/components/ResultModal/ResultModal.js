import classes from "./ResultModal.module.css";
import {forwardRef} from "react";

export const ResultModal = forwardRef(({result, targetTime}, ref) => {

  return (
    <dialog className={classes.result} ref={ref}>
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});