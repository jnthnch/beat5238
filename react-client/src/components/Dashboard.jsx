import React from 'react';
import '../css/style.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-title">
          <p>Dashboard</p>
        </div>

        <div className="games">
          <p className="games-header">Games</p>
          <div className="game-lines">
            <div className="game-lines-text">
              <text className="spread">spread</text>
              <text className="money-line">moneyline</text>
              <text className="total">total</text>
            </div>
          </div>
          <div className="game-list">
            <div className="single-game">
              <div className="game-time">
                <text>8/8/19</text>
                <text>4:00 PM</text>
              </div>
              <div className="game-teams">
                <text>New York Jets</text>
                <text>New York Giants</text>
              </div>
              <div className="game-spread">
                <text>+4.5 (-110)</text>
                <text>-4.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+185</text>
                <text>-225</text>
              </div>
              <div className="totals-line">
                <text>O33.5 (-110)</text>
                <text>U33.5 (-110)</text>
              </div>

            </div>
            <div className="single-game">
              <text>game</text>
            </div>
            <div className="single-game">
              <text>game</text>
            </div>
            <div className="single-game">
              <text>game</text>
            </div>
          </div>
        </div>

        <div className="standings">
          <p>Standings</p>
        </div>
      </div>
    )

  }
}

export default Dashboard;