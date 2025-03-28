import { useToto } from "../../context/TodoProvider";

type TTogo = { id: number; title: string; isCompleted: boolean };

const TodoList = () => {
  const { state } = useToto();

  return (
    <div className="flex-1 border-2 border-purple-500 p-4">
      <h1 className="text-center underline">TodoList</h1>
      <div>
        {state.map((todo: TTogo, idx: number) => (
          <div key={todo.id}>
            <p>{idx+1} . {todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
