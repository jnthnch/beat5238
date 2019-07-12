import React from 'react';
import { Link } from 'react-router-dom';


function LoginForm(props) {
  return (
    <div className="wrapper">
      <h1 className="header">
        Beat5238
      </h1>
      <form className="forms" onSubmit={props.handleSubmit}>
        <div className="equal-space-inputs">
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
          <input type="submit" className="btn btn-danger" value="Login" />
          <Link to="/createuser">
            <input type="submit" className="btn btn-danger" value="Sign Up" />
          </Link>
        </div>

        <div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;