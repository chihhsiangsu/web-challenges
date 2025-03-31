import ColoredNumber, { Button } from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <Button
          ariaLabel="increment count"
          calculateFactor="+"
          onCalculate={handleIncrement}
        ></Button>
        <Button
          ariaLabel="increment count"
          calculateFactor="-"
          onCalculate={handleDecrement}
        ></Button>
      </div>
    </div>
  );
}
