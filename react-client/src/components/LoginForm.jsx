import React from 'react';

function LoginForm(props) {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" className="btn btn-primary" value="Sign Up" />
      </form>
    </div>
  )
}