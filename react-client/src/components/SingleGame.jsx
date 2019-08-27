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
          <text>{props.game.awaySpread}</text>
          <span className="custom-separator"></span>
          <text>{props.game.homeSpread}</text>
        </div>
        <div className="moneyline">
          <text>{props.game.awayML}</text>
          <span className="custom-separator"></span>
          <text>{props.game.homeML}</text>
        </div>
        <div className="totals-line">
          <text>{props.game.over}</text>
          <span className="custom-separator"></span>
          <text>{props.game.under}</text>
        </div>
      </div>
      <div className="single-game-footer">
        <text><b className="bolded-city">{props.game.location[0]}</b>{` - ${props.game.location[1]}`}</text>
      </div>
    </div>
  )
}

export default SingleGame;