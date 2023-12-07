import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./ResultModal.module.css";

export const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {

  const dialog = useRef(null);

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog className={classes.result} ref={dialog} onClose={onReset}>
      {userLost && <h2>Your Lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was&nbsp;<strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with&nbsp;<strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, document.getElementById('modal')
  );
});