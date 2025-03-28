import { useToto } from "../../context/TodoProvider";

type TTogo = { id: number; title: string; isCompleted: boolean };

const TodoList = () => {
  const { state, dispatch } = useToto();

  return (
    <div className="flex-1 border-2 border-purple-500 p-4 space-y-2">
      <h1 className="text-center">TodoList</h1>
      <div className="space-y-2">
        {state.map((todo: TTogo, idx: number) => (
          <div key={todo.id} className="relative bg-purple-500 text-white p-2 ">
            <p className={`${todo.isCompleted ? "line-through" : ""}`}>
              {idx + 1} . {todo.title}
            </p>
            <button
              onClick={() =>
                dispatch({ type: "taskComplete", payload: todo.id })
              }
              className="absolute right-1 top-2 cursor-pointer overflow-hidden bg-purple-900 p-1 rounded-2xl text-sm"
            >
              {todo.isCompleted ? "Preview" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
