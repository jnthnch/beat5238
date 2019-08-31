import React from 'react';
import '../css/style.css'
import SingleGame from './SingleGame.jsx';

const GamesDashboard = (props) => {
  let games = props.gameSpreads.map((game, idx) =>
    <SingleGame game={game} key={`key-${idx}`} gameSelector={props.gameSelector}></SingleGame>
  )

  return (
    <div className="games">
      <p className="games-header">NFL Week 1 - Games ({props.gameSpreads.length})</p>
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

export default GamesDashboard;