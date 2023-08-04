import React, { useEffect, useState } from "react";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(currValue => currValue + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setSeconds(currSeconds => currSeconds + 1);
    setisRunning(true);
  };
  const handlePause = () => {
    setisRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setTime(0);
    setisRunning(false);
  };

  useEffect(() => {
    if (seconds > 60) {
      setTime(prevTime => prevTime + 1);
      setSeconds(0);
    }
  }, [time, seconds]);

  return (
    <>
      <div>
        <h3>Timer App</h3>
        <h1>
          {time} : {seconds}
        </h1>
        <div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default TimerApp;
