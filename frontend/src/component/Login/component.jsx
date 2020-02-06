import React, { Component } from 'react'

class LoginComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-label-group">
          <input type="text" id="username" className="form-control" placeholder="Username" required autofocus />
          <label for="username">Username</label>
        </div>
        <div className="form-label-group">
          <input type="password" id="password" className="form-control" placeholder="Password" required />
          <label for="password">Password</label>
        </div>
      </React.Fragment>
    )
  }
}

export { LoginComponent }
