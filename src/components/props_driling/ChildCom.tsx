type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ChildCom = ({ count, setCount }: TProps) => {
  return (
    <div className="m-5 border-2 border-blue-600 p-2 space-y-2">
      <p className="text-blue-500">From Child Component</p>
      <button
        className="bg-blue-500 px-5 py-2 text-white rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default ChildCom;
