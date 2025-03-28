// import CounterWithClass from "./components/CounterWithClassComponent";
// import CounterWithFuc from "./components/CounterWithFucComponent";
// import ParentCom from "./components/props_driling/ParentCom";
// import UserInfoWithUseState from "./components/UserInfoWithUseState";
// import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <div className="m-2.5 space-y-3">
      {/* <CounterWithClass /> */}
      {/* <CounterWithFuc /> */}
      {/* <ParentCom /> */}
      {/* <UserInfoWithUseState /> */}
      {/* <UserInfoWithUseReducer /> */}

      <TodoProvider>
        <div className="flex justify-center w-full gap-10 min-h-screen">
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
