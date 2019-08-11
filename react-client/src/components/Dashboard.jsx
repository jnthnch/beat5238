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
          <p className="games-header">Games</p>
          <div className="game-lines">
            <div className="game-lines-text">
              <text className="spread">spread</text>
              <text className="money-line">moneyline</text>
              <text className="total">total</text>
            </div>
          </div>
          <div className="game-list">
            <div className="single-game">
              <div className="game-time">
                <text>9/5/19</text>
                <text>5:20 PM</text>
              </div>
              <div className="game-teams">
                <text>Green Bay Packers</text>
                <text>Chicago Bears</text>
              </div>
              <div className="game-spread">
                <text>+3.5 (-110)</text>
                <text>-3.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+150</text>
                <text>-170</text>
              </div>
              <div className="totals-line">
                <text>O46.0 (-110)</text>
                <text>U46.0 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Atlanta Falcons</text>
                <text>Minnesota Vikings</text>
              </div>
              <div className="game-spread">
                <text>+4.0 (-110)</text>
                <text>-4.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+165</text>
                <text>-190</text>
              </div>
              <div className="totals-line">
                <text>O47.5 (-110)</text>
                <text>U47.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Baltimore Ravens</text>
                <text>Miami Dolphins</text>
              </div>
              <div className="game-spread">
                <text>+4.5 (-110)</text>
                <text>-4.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>-220</text>
                <text>+185</text>
              </div>
              <div className="totals-line">
                <text>O37.5 (-110)</text>
                <text>U37.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Buffalo Bills</text>
                <text>New York Jets</text>
              </div>
              <div className="game-spread">
                <text>+3.5 (EVEN)</text>
                <text>-3.0 (-120)</text>
              </div>
              <div className="moneyline">
                <text>+150</text>
                <text>-170</text>
              </div>
              <div className="totals-line">
                <text>O38.5 (-110)</text>
                <text>U38.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Kansas City Chiefs</text>
                <text>Jacksonville Jaguars</text>
              </div>
              <div className="game-spread">
                <text>-3.5 (-110)</text>
                <text>+3.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>-190</text>
                <text>+165</text>
              </div>
              <div className="totals-line">
                <text>O52.5 (-110)</text>
                <text>U52.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Los Angeles Rams</text>
                <text>Carolina Panthers</text>
              </div>
              <div className="game-spread">
                <text>-3.0 (-105)</text>
                <text>+3.0 (-115)</text>
              </div>
              <div className="moneyline">
                <text>-155</text>
                <text>+135</text>
              </div>
              <div className="totals-line">
                <text>O51.0 (-105)</text>
                <text>U51.0 (-115)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Tennessee Titans</text>
                <text>Cleveland Browns</text>
              </div>
              <div className="game-spread">
                <text>+5.5 (-110)</text>
                <text>-5.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+205</text>
                <text>-245</text>
              </div>
              <div className="totals-line">
                <text>O45.5 (-110)</text>
                <text>U45.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>10:00 AM</text>
              </div>
              <div className="game-teams">
                <text>Washington Redskins</text>
                <text>Philadelphia Eagles</text>
              </div>
              <div className="game-spread">
                <text>+8.0 (-105)</text>
                <text>-8.0 (-115)</text>
              </div>
              <div className="moneyline">
                <text>+310</text>
                <text>-420</text>
              </div>
              <div className="totals-line">
                <text>O46.0 (-110)</text>
                <text>U46.0 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>1:05 PM</text>
              </div>
              <div className="game-teams">
                <text>Cincinnati Bengals</text>
                <text>Seattle Seahawks</text>
              </div>
              <div className="game-spread">
                <text>+9.5 (-110)</text>
                <text>-9.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+320</text>
                <text>-440</text>
              </div>
              <div className="totals-line">
                <text>O43.5 (-110)</text>
                <text>U43.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>1:05 PM</text>
              </div>
              <div className="game-teams">
                <text>Indianapolis Colts</text>
                <text>Los Angeles Chargers</text>
              </div>
              <div className="game-spread">
                <text>+3.0 (-110)</text>
                <text>-3.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+140</text>
                <text>-160</text>
              </div>
              <div className="totals-line">
                <text>O47.5 (-110)</text>
                <text>U47.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>1:25 PM</text>
              </div>
              <div className="game-teams">
                <text>Detroit Lions</text>
                <text>Arizona Cardinals</text>
              </div>
              <div className="game-spread">
                <text>-2.5 (-110)</text>
                <text>+2.5 (-110)</text>
              </div>
              <div className="moneyline">
                <text>-135</text>
                <text>+115</text>
              </div>
              <div className="totals-line">
                <text>O47.0 (-110)</text>
                <text>U47.0 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>1:25 PM</text>
              </div>
              <div className="game-teams">
                <text>New York Giants</text>
                <text>Dallas Cowboys</text>
              </div>
              <div className="game-spread">
                <text>+8.0 (-110)</text>
                <text>-8.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+290</text>
                <text>-380</text>
              </div>
              <div className="totals-line">
                <text>O46.0 (-110)</text>
                <text>U46.0 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>1:25 PM</text>
              </div>
              <div className="game-teams">
                <text>San Francisco 49ers</text>
                <text>Tampa Bay Buccaneers</text>
              </div>
              <div className="game-spread">
                <text>+1.0 (-115)</text>
                <text>-1.0 (-105)</text>
              </div>
              <div className="moneyline">
                <text>-105</text>
                <text>-115</text>
              </div>
              <div className="totals-line">
                <text>O49.0 (-110)</text>
                <text>U49.0 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>5:20 PM</text>
              </div>
              <div className="game-teams">
                <text>Pittsburgh Steelers</text>
                <text>New England Patriots</text>
              </div>
              <div className="game-spread">
                <text>+6.0 (-110)</text>
                <text>-6.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+215</text>
                <text>-260</text>
              </div>
              <div className="totals-line">
                <text>O51.5 (-110)</text>
                <text>U51.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/8/19</text>
                <text>5:20 PM</text>
              </div>
              <div className="game-teams">
                <text>Pittsburgh Steelers</text>
                <text>New England Patriots</text>
              </div>
              <div className="game-spread">
                <text>+6.0 (-110)</text>
                <text>-6.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+215</text>
                <text>-260</text>
              </div>
              <div className="totals-line">
                <text>O51.5 (-110)</text>
                <text>U51.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/9/19</text>
                <text>4:10 PM</text>
              </div>
              <div className="game-teams">
                <text>Houston Texans</text>
                <text>New Orleans Saints</text>
              </div>
              <div className="game-spread">
                <text>+7.0 (-120)</text>
                <text>-7.0 (EVEN)</text>
              </div>
              <div className="moneyline">
                <text>+250</text>
                <text>-300</text>
              </div>
              <div className="totals-line">
                <text>O53.5 (-110)</text>
                <text>U53.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/9/19</text>
                <text>4:10 PM</text>
              </div>
              <div className="game-teams">
                <text>Houston Texans</text>
                <text>New Orleans Saints</text>
              </div>
              <div className="game-spread">
                <text>+7.0 (-120)</text>
                <text>-7.0 (EVEN)</text>
              </div>
              <div className="moneyline">
                <text>+250</text>
                <text>-300</text>
              </div>
              <div className="totals-line">
                <text>O53.5 (-110)</text>
                <text>U53.5 (-110)</text>
              </div>
            </div>

            <div className="single-game">
              <div className="game-time">
                <text>9/9/19</text>
                <text>7:15 PM</text>
              </div>
              <div className="game-teams">
                <text>Denver Broncos</text>
                <text>Oakland Raiders</text>
              </div>
              <div className="game-spread">
                <text>+2.0 (-110)</text>
                <text>-2.0 (-110)</text>
              </div>
              <div className="moneyline">
                <text>+105</text>
                <text>-125</text>
              </div>
              <div className="totals-line">
                <text>O43.5 (-110)</text>
                <text>U43.5 (-110)</text>
              </div>
            </div>

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