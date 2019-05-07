import React from 'react';

class UsernameDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: '' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ currentUser: event.target.value });
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <form onSubmit={(e) => this.props.handleUsernameSelection(e, this.state.currentUser)}>
          <label>
            Select Username
            <select value={this.state.value} className="custom-select" onChange={(e) => this.handleChange(e)}>
              <option value=""></option>
              {users.map((user, idx) => {
                return <option key={idx} value={user.username}>{user.username}</option>
              })}
            </select>
          </label>
          <input type="submit" className="btn btn-primary" value="Select" />
        </form>
      </div>
    )
  }
}

export default UsernameDropdown;