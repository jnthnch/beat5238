import React from 'react';
import GameItem from './GameItem.jsx';

const GameList = (props) => {
  const games = props.games.map((game, idx) => {
    return (
      <li key={idx}>
        <GameItem game={game} id={idx} key={idx} />
      </li>
    )
  });

  return (
    <div>
      NBA games ({props.games.length})
      <ul>
        {games}
      </ul>
    </div>
  )
}

export default GameList;