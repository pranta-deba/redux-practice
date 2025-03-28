import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type TTotoContext = { state: TTodo[]; dispatch: Dispatch<TAction> } | null;

type TTodoProviderProps = { children: ReactNode };

type TTodo = { id: number; title: string; isCompleted: boolean };

type TAction = { type: "ADD_TODO" | "TASK_COMPLETE"; payload: TTodo | string };

const typeConstants = {
  ADD_TODO: "ADD_TODO",
  TASK_COMPLETE: "TASK_COMPLETE",
};

export const TodoContext = createContext<TTotoContext>(null);
export const useToto = () => {
  return useContext(TodoContext);
};

const initialState: TTodo[] = [];
const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload];

    case typeConstants.TASK_COMPLETE:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
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
