import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCountIncrement() {
    setCount((prev) => prev + 1);
  }
  function handleCountDecrement() {
    if (count > 0) setCount((prev) => prev - 1);
  }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleCountIncrement} className="ring  px-4 py-1">
        Add
      </button>
      <button onClick={handleCountDecrement} className="ring  px-4 py-1">
        Subtract
      </button>
    </div>
  );
}

export default Counter;
