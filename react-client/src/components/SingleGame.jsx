import React from 'react';

const SingleGame = (props) => {
  return (
    <div className="single-game">
      <div className="single-game-content">
        <div className="game-time">
          {`${props.game.gameTime}`}
        </div>
        <div className="game-teams">
          <div className="game-teams-inner">
            <div className="away-team">
              {props.game.awayTeam}
            </div>
            <div className="home-team">
              {props.game.homeTeam}
            </div>
          </div>
        </div>
        <div className="game-spread">
          <text className="away-spread" onClick={(e) => props.gameSelector(e)}>{props.game.awaySpread}</text>
          <text className="home-spread" onClick={(e) => props.gameSelector(e)}> {props.game.homeSpread}</text>
        </div>
        <div className="moneyline">
          <text className="away-moneyline">{props.game.awayML}</text>
          <text className="home-moneyline">{props.game.homeML}</text>
        </div>
        <div className="totals-line">
          <text className="totals-over" onClick={(e) => props.gameSelector(e)}> {props.game.over}</text>
          <text className="totals-under" onClick={(e) => props.gameSelector(e)}> {props.game.under}</text>
        </div>
      </div>
      <div className="single-game-footer">
        <text><b className="bolded-city">{props.game.location[0]}</b>{` - ${props.game.location[1]}`}</text>
      </div>
    </div>
  )
}

export default SingleGame;


