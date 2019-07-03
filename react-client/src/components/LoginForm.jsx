import React from 'react';

function LoginForm(props) {
  return (
    <div>
      <h1 className="header">
        Beat5238
      </h1>
      <form className="create-user-form" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>
            Username:
              <input type="text" name="username" value='' onChange={props.handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Password:
              <input type="text" name="password" value='' onChange={props.handleInputChange} required />
          </label>
        </div>
        <input type="submit" className="btn btn-danger" value="Login" />
      </form>
    </div>
  )
}

export default LoginForm;