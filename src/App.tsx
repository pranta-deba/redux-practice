import CounterWithClass from "./components/CounterWithClassComponent";
import CounterWithFuc from "./components/CounterWithFucComponent";
import ParentCom from "./components/props_driling/ParentCom";
import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  return (
    <div className="m-2.5 space-y-3">
      <CounterWithClass />
      <CounterWithFuc />
      <ParentCom/>
      <UserInfoWithUseState/>
    </div>
  );
}

export default App;
