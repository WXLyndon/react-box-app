import React, { Component } from "react";

class Box extends Component {
  state = {
    x: 1,
  };

  handleClickLeft = () => {
    this.setState({ x: this.state.x - 1 });
  };

  handleClickRight = () => {
    this.setState({ x: this.state.x + 1 });
  };

  render() {
    return (
      <>
        <div style={this.getStyles()}> {this.toString()}</div>
        <button onClick={this.handleClickLeft} className="btn btn-primary m-2">
          left
        </button>
        <button onClick={this.handleClickRight} className="btn btn-primary m-2">
          right
        </button>
      </>
    );
  }

  getStyles() {
    let styles = {
      width: 50,
      height: 50,
      backgroundColor: "lightblue",
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      borderRadius: "5px",
      marginLeft: 10 * this.state.x,
    };

    if (this.state.x === 0) {
      styles.backgroundColor = "orange";
    }

    return styles;
  }

  toString() {
    const { x } = this.state;
    return `x: ${x}`;
  }
}

export default Box;
