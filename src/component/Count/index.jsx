import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countPlus = (e) => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  countReduce = (e) => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.countPlus}>+1</button>
        <span>{this.state.count}</span>
        <button onClick={this.countReduce}>-1</button>
      </div>
    );
  }
}

export default Count;
