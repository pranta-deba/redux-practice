import {
  decrement,
  increment,
  incrementByValue,
  incrementByValueFromObject,
} from "../../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const CountersWithRedux = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center gap-7 text-2xl my-16">
      <button
        onClick={() => dispatch(increment())}
        className="cursor-pointer bg-green-600 px-4 py-2 text-xl rounded-2xl text-white"
      >
        Increment
      </button>
      <p>{count}</p>
      <button
        onClick={() => dispatch(decrement())}
        className="cursor-pointer bg-red-600 px-4 py-2 text-xl rounded-2xl text-white"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="cursor-pointer bg-purple-600 px-4 py-2 text-xl rounded-2xl text-white"
      >
        Increment By 5
      </button>
      <button
        onClick={() => dispatch(incrementByValueFromObject({ value: 10 }))}
        className="cursor-pointer bg-blue-700 px-4 py-2 text-xl rounded-2xl text-white"
      >
        Increment By 10
      </button>
    </div>
  );
};

export default CountersWithRedux;
