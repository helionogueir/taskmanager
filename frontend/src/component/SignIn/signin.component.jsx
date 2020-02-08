import React, { Component } from 'react'

class SignInComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-label-group">
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Username"
            required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-label-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required />
          <label htmlFor="password">Password</label>
        </div>
      </React.Fragment>
    )
  }
}

export { SignInComponent }

