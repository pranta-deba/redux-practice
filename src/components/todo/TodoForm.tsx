import { FormEvent, useState } from "react";
import { useToto } from "../../context/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useToto();
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="space-y-2">
      <h1>Add Togo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onBlur={(e) => setTask(e.target.value)}
          placeholder="Add a new Todo"
          className="px-1 py-2 outline-purple-500 border-[1px] border-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-500 px-1 py-2 rounded-r-2xl cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
