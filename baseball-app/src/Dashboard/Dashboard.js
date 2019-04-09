import React from "react";
import Display from "../Display/Display.js";

class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    return (
      <>
        <h2>Dashboard</h2>
        <button onClick={this.handleHit}>Hit</button>
        <button onClick={this.handleStrike}>Strike</button>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </>
    );
  }

  handleHit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  handleStrike = () => {
    let strikes = this.state.strikes;
    if (strikes >= 2) {
      this.setState({ strikes: 0, balls: 0 });
    } else {
      this.setState(prevState => ({ strikes: prevState.strikes + 1 }));
    }
  };
}

export default Dashboard;
