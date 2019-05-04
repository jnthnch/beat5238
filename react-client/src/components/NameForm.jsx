import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={this.state.value} onChange={this.handleInputChange} required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.value} onChange={this.handleInputChange} required />
          </label>
          <label>
            Username:
            <input type="text" name="userName" value={this.state.value} onChange={this.handleInputChange} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NameForm;