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
          <p className="game-title">Games</p>
          {/* <div className="game-headings">Heading</div> */}
          <div className="game-list">
            <div className="one-game">game</div>
            <div className="one-game">game</div>
            <div className="one-game">game</div>
            <div className="one-game">game</div>
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