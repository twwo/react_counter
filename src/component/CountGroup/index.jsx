import React from "react";
import Count from "../Count";

class CountGroup extends React.Component {
  render() {
    return (
      <div>
        {new Array(5).fill(0).map((value, index) => (
          <Count />
        ))}
      </div>
    );
  }
}

export default CountGroup;
