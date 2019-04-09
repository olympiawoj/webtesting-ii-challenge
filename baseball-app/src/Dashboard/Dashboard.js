import React from "react";

class Dashboard extends React.Component {
  state = {
    balls: 4,
    strikes: 3
  };

  render() {
    return (
      <>
        <h2>Dashboard</h2>
        <button onClick={this.handleHit}>Hit</button>
        <button onClick={this.handleStrike}>Strike</button>
        <p>Balls: {this.state.balls}</p>
        <p>Strikes: {this.state.strikes}</p>
      </>
    );
  }

  handleHit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  //   handleStrike = () => {
  //     if (this.state.balls >= 4 || this.state.strikes >= 3) {
  //       this.setState({
  //         ...this.state,
  //         balls: 0,
  //         strikes: 0
  //       });
  //     }
  //   };

  handleStrike = () => {
    if (this.state.strike >= 3) {
      this.setState({ strike: 0 });
    } else {
      this.setState((strike += 1));
    }
  };
}

export default Dashboard;
