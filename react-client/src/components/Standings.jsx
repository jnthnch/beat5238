import React from 'react';

const Standings = (props) => {
  const users = props.users.map((user, idx) => {
    return (
      <tr key={idx}>
        <th scope="row">1</th>
        <td>{user.username}</td>
        <td>1</td>
        <td>0</td>
        <td>100%</td>
      </tr>
    )
  });

  return (
    <div>
      <h2>Standings</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Wins</th>
            <th scope="col">Losses</th>
            <th scope="col">Win %</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    </div>
  )
}

export default Standings;
