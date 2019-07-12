import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function CreateUserForm(props) {
  return (
    <div className="wrapper">
      <h1 className="header">
        Beat5238
      </h1>
      <div>
        <form className="forms">
          <div className="equal-space-inputs">
            <label>
              First Name:
                <input type="text" name="firstName" value='' onChange={props.handleInputChange} required />
            </label>

            <label>
              Last Name:
                <input type="text" name="lastName" value='' onChange={props.handleInputChange} required />
            </label>

            <label>
              Username:
                <input type="text" name="username" value='' onChange={props.handleInputChange} required />
            </label>

            <label>
              Password:
                <input type="text" name="password" value='' onChange={props.handleInputChange} required />
            </label>
          </div>

          <div className="equal-space-buttons">
            <Link to="/">
              <input type="submit" className="btn btn-danger" value="Back"></input>
            </Link>
            <input type="submit" className="btn btn-danger" value="Create User" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateUserForm;