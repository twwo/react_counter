import React from "react";
import Count from "../Count";

class CountGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      total: 0,
    };
  }

  setNumberOfCounters = (e) => {
    this.setState({
      number: Number(e.target.value),
    });
  };

  totalPlus = (e) => {
    this.setState({
      total: this.state.total + 1,
    });
  };

  totalReduce = (e) => {
    this.setState({
      total: this.state.total - 1,
    });
  };

  render() {
    return (
      <div>
        <span>number of counters: </span>
        <input
          type="number"
          id="numberOfCounters"
          onChange={this.setNumberOfCounters}
        ></input>
        <br />
        <span>total: {this.state.total}</span>
        {new Array(this.state.number).fill(0).map((value, index) => (
          <Count
            key={index}
            totalPlus={this.totalPlus}
            totalReduce={this.totalReduce}
          />
        ))}
      </div>
    );
  }
}

export default CountGroup;
