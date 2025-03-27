import { useState } from "react";

const CounterWithFuc = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-green-600 p-2 space-y-2">
      <p className="text-green-500">From Function Component</p>
      <button
        className="bg-green-500 px-5 py-2 text-white rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterWithFuc;
