import React from 'react';
import GameItem from './GameItem.jsx';

const GameList = (props) => (
  <div>
    There are {props.games.length} NBA games:
    {props.games.map((game, idx) => <GameItem game={game} id={idx} key={idx} />)}
  </div>
)

export default GameList;
