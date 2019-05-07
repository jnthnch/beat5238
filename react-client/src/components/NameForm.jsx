import React from 'react';
import $ from 'jquery';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/users',
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
      },
      success: (data) => {
        console.log('successful add!')
      },
      error: (err) => {
        console.log('err', err);
      }
    })
      .done(this.props.handleUsernameSubmission)
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
          <div className="form-group">
            <label>
              First Name:
              <input type="text" name="firstName" value={this.state.value} onChange={this.handleInputChange} required />
            </label>
          </div>

          <div className="form-group">
            <label>
              Last Name:
              <input type="text" name="lastName" value={this.state.value} onChange={this.handleInputChange} required />
            </label>
          </div>

          <div className="form-group">
            <label>
              Username:
              <input type="text" name="username" value={this.state.value} onChange={this.handleInputChange} required />
            </label>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NameForm;