import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type TTotoContext = { state: TTogo[]; dispatch: Dispatch<TAction> } | undefined;

type TTodoProviderProps = { children: ReactNode };

type TTogo = { id: number; title: string; isCompleted: boolean };

type TAction = { type: "addTodo"; payload: TTogo | string };

export const TodoContext = createContext<TTotoContext>(undefined);
export const useToto = () => {
  return useContext(TodoContext);
};

const initialState: TTogo[] = [];
const reducer = (currentState: TTogo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "taskComplete":
      return currentState.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = { state, dispatch };

  console.log(state);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
