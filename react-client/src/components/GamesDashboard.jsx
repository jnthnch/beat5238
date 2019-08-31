import React from 'react';
import '../css/style.css'
import gameSpreads from '../../gameSpreads';
import SingleGame from './SingleGame.jsx';

class GamesDashboard extends React.Component {
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
      <div className="games">
        <p className="games-header">NFL Week 1 - Games ({this.state.gameSpreads.length})</p>
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
    )
  }
}

export default GamesDashboard;