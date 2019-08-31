import React from 'react';
import '../css/style.css'
import gameSpreads from '../../gameSpreads';
import SingleGame from './SingleGame.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSpreads: gameSpreads
    }
  };

  render() {
    let games = this.state.gameSpreads.map((game, idx) =>
      <SingleGame game={game} key={`key-${idx}`}></SingleGame>
    )
    return (
      <div className="dashboard">
        <div className="dashboard-title">
          <p>Dashboard</p>
        </div>

        <div className="games">
          <p className="games-header">NFL Games ({this.state.gameSpreads.length}) - Week 1</p>
          <div className="game-lines">
            <div className="blank-space"></div>
            <div className="game-lines-text">
              <text className="spread">Spread</text>
              <text className="money-line">Moneyline</text>
              <text className="total">Total</text>
            </div>
          </div>
          <div className="game-list">
            {games}
          </div>
        </div>

        <div className="standings">
          <p>Standings</p>
        </div>

        <div className="current-selections">
          <p>Current Selections</p>
        </div>
      </div>
    )
  }
}

export default Dashboard;