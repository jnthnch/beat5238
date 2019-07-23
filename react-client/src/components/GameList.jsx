import React from 'react';
import GameItem from './GameItem.jsx';

class GameList extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    //   const games = props.games.map((game, idx) => {
    //     <li key={idx}>
    //       <GameItem game={game} id={idx} key={idx} />
    //     </li>
    //   });

    //   return (
    //     <div>
    //       NBA games ({props.games.length})
    //     <ul>
    //         {games}
    //       </ul>
    //     </div>
    //   )
    // }
    return (
      <h1>GAME LIST</h1>
    )

  }
}

export default GameList;