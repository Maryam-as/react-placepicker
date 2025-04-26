import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  // useEffect sets up a repeating interval that ticks every 10ms to decrement the remainingTime state,
  // driving the progress bar’s smooth countdown animation.
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // the cleanup function clears the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // cleanup function: cancel the timer if the component unmounts or the effect is re-run
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
