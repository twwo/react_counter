import React from "react";
import Count from "../Count";

class CountGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  setNumberOfCounters = (e) => {
    this.setState({
      number: Number(e.target.value)
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
        {new Array(this.state.number).fill(0).map((value, index) => (
          <Count key={index} />
        ))}
      </div>
    );
  }
}

export default CountGroup;
