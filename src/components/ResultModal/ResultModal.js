import classes from "./ResultModal.module.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

export const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
    <dialog className={classes.result} ref={dialog}>
      {userLost && <h2>Your Lost</h2>}
      <p>
        The target time was&nbsp;<strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with&nbsp;<strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});