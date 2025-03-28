// import CounterWithClass from "./components/CounterWithClassComponent";
// import CounterWithFuc from "./components/CounterWithFucComponent";
// import ParentCom from "./components/props_driling/ParentCom";
// import UserInfoWithUseState from "./components/UserInfoWithUseState";
// import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";

import TodoForm from "./components/todo/TodoForm";
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
        <TodoForm />
      </TodoProvider>
    </div>
  );
}

export default App;
