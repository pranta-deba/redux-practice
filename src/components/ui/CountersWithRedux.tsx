import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/features/counterSlice";

const CountersWithRedux = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

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
    </div>
  );
};

export default CountersWithRedux;
