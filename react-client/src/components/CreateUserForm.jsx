import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class CreateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitter = this.submitter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitter(event) {
    console.log('submitter clicked', event);
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/createuser',
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password, //TO DO: Encrypt the password; Bcrypt?
      },
      success: (data) => {
        alert(`User created`)
        //TO DO: route to the next page? logged in
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('typing', event.target.value)
    this.setState({
      [name]: [value]
    })
  }

  render() {
    return (
      <div className="wrapper" >

        <h1 className="header">
          Beat5238
        </h1>

        <div>
          <form className="forms" onSubmit={e => this.submitter(e)}>
            <div className="equal-space-inputs">
              <label>
                First Name:
                  <input type="text" name="firstName" defaultValue='' onChange={this.handleInputChange} required />
              </label>

              <label>
                Last Name:
                  <input type="text" name="lastName" defaultValue='' onChange={this.handleInputChange} required />
              </label>

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
              <Link to="/">
                <input type="button" className="btn btn-danger" value="Back"></input>
              </Link>
              <input type="submit" className="btn btn-danger" value="Create User" />
            </div>

          </form>
        </div>

      </div>
    )
  }
}

export default CreateUserForm;