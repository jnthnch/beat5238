import React from 'react';
import '../css/style.css'
import GamesDashboard from './GamesDashboard.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-title">
          <h1><b>Dashboard</b></h1>
        </div>

        <GamesDashboard></GamesDashboard>

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