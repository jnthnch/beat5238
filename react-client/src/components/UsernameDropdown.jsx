import React from 'react';

class UsernameDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, console.log('set the state!'));
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <form onSubmit={this.props.handleUsernameSelection}>
          <label>
            Select Username
            <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
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