import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

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

  return <progress value={remainingTime} max={timer} />;
}
