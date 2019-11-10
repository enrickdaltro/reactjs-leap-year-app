import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0
    };
  }

  updateYear(num) {
    this.setState({ year: num });
  }

  testLeap(num) {
    if (num % 4 == 0 && num % 100 != 0) {
      console.log(true);
    } else if (num % 4 == 0 && num % 400 == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  render() {
    return (
      <div>
        <input onChange={event => this.updateYear(event.target.value)}></input>
        <button onClick={() => this.testLeap(this.state.year)}>Test</button>
      </div>
    );
  }
}
