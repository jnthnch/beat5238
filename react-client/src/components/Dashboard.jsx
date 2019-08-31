import React from 'react';
import '../css/style.css'
import GamesDashboard from './GamesDashboard.jsx';
import gameSpreads from '../../gameSpreads';
import CurrentSelections from './CurrentSelections.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameSpreads: gameSpreads,
      currentPicks: [],
      currentPicksSubmitted: [],
    }

    this.gameSelector = this.gameSelector.bind(this);
  };

  gameSelector(event) {
    console.log('clicked something', event.target)
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-title">
          <h1><b>Dashboard</b></h1>
        </div>

        <GamesDashboard gameSpreads={this.state.gameSpreads} gameSelector={this.gameSelector}></GamesDashboard>

        <CurrentSelections></CurrentSelections>

        <div className="standings">
          <p>Standings</p>
        </div>

      </div>
    )
  }
}

export default Dashboard;