import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NameForm from './components/NameForm.jsx';
import UsernameDropdown from './components/UsernameDropdown.jsx';
import GameList from './components/GameList.jsx';
import GameSlate from './sample_data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      games: []
    }
    this.handleUsernameSelection = this.handleUsernameSelection.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/users',
      success: (data) => {
        this.setState({
          users: data,
          games: GameSlate
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // $.ajax({
    //   url: '/games',
    //   success: (data) => {
    //     let games = data.data.filter(game => game.sport_key === "basketball_nba");
    //     this.setState({
    //       games: games
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleUsernameSelection() {

  }

  render() {
    return (
      <div>
        <h1>52.38% Weekly Sports Picks</h1>
        <NameForm />
        <UsernameDropdown users={this.state.users} handleUsernameSelection={this.handleUsernameSelection} />
        <GameList games={this.state.games} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));