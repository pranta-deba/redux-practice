import "./App.css";
import CounterWithClass from "./components/CounterWithClassComponent";
import CounterWithFuc from "./components/CounterWithFucComponent";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CounterWithClass />
      <CounterWithFuc />
    </div>
  );
}

export default App;
