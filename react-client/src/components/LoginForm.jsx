import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import bcrypt from '../../../bcrypt/hashing.js';
import bcrypt from 'bcryptjs';

// const buttonProps = {
//   DANGER: 'danger',
//   DEFAULT: 'btn',
// }
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.createUser = this.createUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    // this.checkPassword = this.checkPassword.bind(this);
    // this.checkBcrypt = this.checkBcrypt.bind(this);
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
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleLogin(event) {
    console.log('pressed login')
    console.log('state is', this.state)
    let usernameInput = this.state.username
    let passwordInput = this.state.password;
    // this.checkPassword(usernameInput, passwordInput);
  }

  // checkPassword(username, password) {
  //   $.ajax({
  //     type: "GET",
  //     url: `/users/${username}`,
  //     data: {
  //       password: password
  //     },
  //     success: (data) => {
  //       // get salt back from database
  //       let dbPassword = data[0].password
  //       //this.checkBcrypt(dbPassword, salt)
  //       if (dbPassword === password) {
  //         console.log('password matches!!!')
  //         // TODO route to BETTING PAGE
  //       } else {
  //         alert('wrong password entered')
  //       }
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   })
  // }

  // checkBcrypt(password, salt) {
  //   bcrypt.hash(password, salt, (err, hash) => {
  //     console.log('hash is', hash)
  //   });
  // }

  // consider react final form, formik for library forms - why/why not to use them
  // use library "classnames" to prevent classname collisions
  // container components pattern - by redux creator Dan Abra
  // build a promise library with native js and build a DOM tree
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
            <Link to="/dashboard">
              <button className="btn btn-danger" >To Dashboard</button>
            </Link>

            <button type="submit" className="btn btn-danger" value="Login" onClick={this.handleLogin}>Login</button>


            <Link to="/createuser">
              <button className="btn btn-danger" >Sign Up</button>
            </Link>
          </div>

        </form>
      </div>
    )
  }

}

export default LoginForm;