import "./styles.css";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function getFormattedDate(date) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  function calculateDate(count) {
    const date = new Date();
    date.setDate(date.getDate() + count);
    return getFormattedDate(date);
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleStepAdd() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountAdd() {
    setCount((c) => c + step);
  }

  function getMessage(count) {
    if (count < 0) {
      return `${Math.abs(count)} days ago was ${calculateDate(count)}`;
    } else if (count === 0) {
      return `Today is ${calculateDate(count)}`;
    } else {
      return `${count} days from today is ${calculateDate(count)}`;
    }
  }

  return (
    <div>
      <p className="button-container">
        <button className="btn minus" onClick={handleStepMinus}>
          {" "}
          -
        </button>
        Step: {step}
        <button className="btn add" onClick={handleStepAdd}>
          +
        </button>
      </p>
      <p className="button-container">
        <button className="btn minus" onClick={handleCountMinus}>
          -
        </button>
        Count: {count}
        <button className="btn add" onClick={handleCountAdd}>
          +
        </button>
      </p>
      <p>{getMessage(count)}</p>
    </div>
  );
}
