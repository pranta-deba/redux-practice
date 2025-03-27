import { useState } from "react";
import ChildCom from "./ChildCom";

const ParentCom = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-2 border-2 border-red-500">
      <p>Parent Component: {count}</p>
      <ChildCom count={count} setCount={setCount} />
    </div>
  );
};

export default ParentCom;
