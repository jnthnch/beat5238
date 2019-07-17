import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createUser = this.createUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createUser(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/users',
      data: {
        username: this.state.username,
        password: this.state.password, //TO DO: Encrypt the password; Bcrypt?
      },
      success: (data) => {
        alert(`User created: ${username}`)
        console.log('successfully created!')
        //TO DO: route to the next page? logged in
      },
      error: (err) => {
        console.log('err', err);
      }
    })
      .done(this.props.handleUsernameSubmission)
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: [value]
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <div className="wrapper" >
        <h1 className="header">
          Beat5238
        </h1>
        <form className="forms" onSubmit={this.handleSubmit} method="post">
          <div className="equal-space-inputs">
            <label>
              Username:
                <input type="text" name="username" defaultValue='' onChange={this.handleInputChange} required />
            </label>

            <label>
              Password:
                <input type="password" name="password" defaultValue='' onChange={this.handleInputChange} required />
            </label>
          </div>

          <div className="equal-space-buttons">
            <input type="submit" className="btn btn-danger" value="Login" />
            <Link to="/createuser">
              <input type="submit" className="btn btn-danger" value="Sign Up" />
            </Link>
          </div>

        </form>
      </div>
    )
  }

}

export default LoginForm;