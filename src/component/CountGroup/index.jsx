import React from "react";
// import Count from "../Count";

class CountGroup extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     total: 0,
  //     children: [],
  //   };
  // }

  // addChild = (child) => {
  //   this.state.children.push(child);
  // }

  setNumberOfCounters = (e) => {
    // this.setState({
    //   number: Number(e.target.value),
    //   total: 0
    // });
    // this.state.children.forEach(child => {
    //     child.clear();
    // })
    this.props.updateTotal(1);
  };

  // totalPlus = (e) => {
  //   this.setState({
  //     total: this.state.total + 1,
  //   });
  // };

  // totalReduce = (e) => {
  //   this.setState({
  //     total: this.state.total - 1,
  //   });
  // };

  render() {
    return (
      <div>
        <span>number of counters: </span>
        <input
          type="number"
          // id="numberOfCounters"
          onChange={this.setNumberOfCounters}
        ></input>
        <br />
        <span>total: {this.props.total}</span>
        {/* {new Array(this.state.number).fill(0).map((value, index) => (
          <Count
            key={index}
            totalPlus={this.totalPlus}
            totalReduce={this.totalReduce}
            onRef={this.addChild}
          />
        ))} */}
      </div>
    );
  }
}

export default CountGroup;
