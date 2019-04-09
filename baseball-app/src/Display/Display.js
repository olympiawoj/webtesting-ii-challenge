import React from "react";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <>
        <h2>Display</h2>
        <p>Balls: {this.state.balls}</p>
        <p>Strikes: {this.state.strikes}</p>
      </>
    );
  }
}

export default Display;
