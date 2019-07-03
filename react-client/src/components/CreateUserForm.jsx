import React from 'react';

function CreateUserForm(props) {
  return (
    <div>
      <h1 className="header">
        Beat5238
      </h1>
      <div>
        <form className="create-user-form">
          <div className="form-group">
            <label>
              First Name:
                <input type="text" name="firstName" value='' onChange={props.handleInputChange} required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name:
                <input type="text" name="lastName" value='' onChange={props.handleInputChange} required />
            </label>
          </div>
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
          <input type="submit" className="btn btn-danger" value="Sign Up" />
        </form>
      </div>
    </div>
  )
}

export default CreateUserForm;