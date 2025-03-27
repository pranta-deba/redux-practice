import { useState } from "react";

const CounterWithFuc = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "5px", border: "2px solid black" }}>
      <p>From Function Component</p>
      <button
        style={{ padding: "5px 10px", fontSize: "20px" }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterWithFuc;
