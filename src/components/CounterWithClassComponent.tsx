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
      <div className="border-2 border-purple-600 p-2 space-y-2">
        <p className="text-purple-600">From Class Component</p>
        <button onClick={() => this.setState({ count: count + 1 })} className="bg-purple-500 px-5 py-2 text-white rounded-xl">
          {count}
        </button>
      </div>
    );
  }
}

export default CounterWithClass;
