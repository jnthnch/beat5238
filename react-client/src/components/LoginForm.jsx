import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Dashboard from './Dashboard.jsx';


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
      logged_in: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(event) {
    event.preventDefault();

    let usernameInput = this.state.username;
    let passwordInput = this.state.password;

    $.ajax({
      type: "POST",
      url: `/users/${usernameInput}`,
      data: {
        username: usernameInput,
        password: passwordInput
      },
      success: (data) => {
        this.setState({
          logged_in: true
        })
      },
      error: (err) => {
        alert('login unsuccessful')
        console.log('login unsuccessful', err);
      }
    })
  }

  render() {
    if (!this.state.logged_in) {
      return (
        <div className="wrapper" >
          <h1 className="header">
            Beat5238
            </h1>
          <form className="forms" onSubmit={this.handleLogin} method="post">
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
    } else {
      return (
        <Dashboard></Dashboard>
      )
    }
  }
}
// consider react final form, formik for library forms - why/why not to use them
// use library "classnames" to prevent classname collisions
// container components pattern - by redux creator Dan Abra
// build a promise library with native js and build a DOM tree


export default LoginForm;