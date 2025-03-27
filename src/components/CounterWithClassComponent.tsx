import React from "react";

class CounterWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this);
    const { count } = this.state;

    return (
      <div style={{ padding: "5px", border: "2px solid black" }}>
        <p>From Class Component</p>
        <button
          style={{ padding: "5px 10px", fontSize: "20px" }}
          onClick={() => this.setState({ count: count + 1 })}
        >
          {count}
        </button>
      </div>
    );
  }
}

export default CounterWithClass;
