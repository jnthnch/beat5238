import React from 'react';

const findBovadaSpread = (game) => {
  let bovadaOdds = {};
  const gameSites = game.sites;
  const bovadaSite = gameSites.filter(site => site.site_key === 'bovada');
  if (bovadaSite.length === 0) {
    bovadaOdds[game.teams[0]] = 'No line available';
    bovadaOdds[game.teams[1]] = 'No line available';

  } else {
    bovadaOdds[game.teams[0]] = bovadaSite[0].odds.h2h[0]
    bovadaOdds[game.teams[1]] = bovadaSite[0].odds.h2h[1]
  }
  return bovadaOdds
}

const findGameTime = (game) => {
  let gameStartTime = game.commence_time;
  var utcSeconds = gameStartTime;
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(utcSeconds);
  return d.toLocaleString();
}

const convertSpreadsMoneyline = (decimalForm) => {
  if (typeof decimalForm !== 'number') {
    return 'No Line Available';
  }

  if (decimalForm >= 2) {
    return '+' + Math.round((decimalForm - 1) * 100);
  } else {
    return Math.round(-100 / (decimalForm - 1));
  }
}

const convertToAmericanOdds = (odds) => {
  let keys = Object.keys(odds);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    odds[key] = convertSpreadsMoneyline(odds[key])
  }
  return odds
}

const GameItem = (props) => {
  let game = props.game;
  let tipoffTime = findGameTime(game)
  let bovadaOdds = findBovadaSpread(game);
  bovadaOdds = convertToAmericanOdds(bovadaOdds);

  let homeTeam = game.home_team;
  let awayTeam = game.teams[0] === homeTeam ? game.teams[1] : game.teams[0];
  let homeTeamOdds = bovadaOdds[homeTeam];
  let awayTeamOdds = bovadaOdds[awayTeam];
  return (
    <div>
      <h4>Game #{props.id + 1}</h4>
      <h5>Start time: {tipoffTime}</h5>
      <h5>Home Team</h5>
      {homeTeam} <i>{homeTeamOdds}</i>
      <h5>Away Team</h5>
      {awayTeam} <i>{awayTeamOdds}</i>
      {/* {props.items.map(item => <ListItem item={item} />)} */}
    </div>
  )
}


export default GameItem;