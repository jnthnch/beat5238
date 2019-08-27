import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "./css/style.css";
import Router from './components/Router.js';
import NameForm from './components/NameForm.jsx';
import UsernameDropdown from './components/UsernameDropdown.jsx';
import GameList from './components/GameList.jsx';
import Standings from './components/Standings.jsx';
// import GameSlate from './sample_data';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       games: [],
//       currentUser: ''
//     }
//     this.handleUsernameSubmission = this.handleUsernameSubmission.bind(this);
//     this.handleUsernameSelection = this.handleUsernameSelection.bind(this);
//   }

//   componentDidMount() {
//     $.ajax({
//       url: '/users',
//       success: (data) => {
//         this.setState({
//           users: data,
//           games: GameSlate
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });

//     // $.ajax({
//     //   url: '/games',
//     //   success: (data) => {
//     //     let games = data.data.filter(game => game.sport_key === "basketball_nba");
//     //     this.setState({
//     //       games: games
//     //     })
//     //   },
//     //   error: (err) => {
//     //     console.log('err', err);
//     //   }
//     // });
//   }

//   handleUsernameSubmission() {
//     console.log('user submitted!')
//     $.ajax({
//       url: '/users',
//       success: (data) => {
//         this.setState({
//           users: data,
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }


//   handleUsernameSelection(e, currentUser) {
//     e.preventDefault();
//     this.setState({
//       currentUser: currentUser
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>52.38% NBA Picks Challenge</h1>
//         <NameForm handle2UsernameSubmission={this.handleUsernameSubmission} />
//         <UsernameDropdown users={this.state.users} handleUsernameSelection={this.handleUsernameSelection} />
//         <GameList games={this.state.games} />
//         <Standings users={this.state.users} />
//       </div>
//     )
//   }
// }

ReactDOM.render(<Router />, document.getElementById('app'));