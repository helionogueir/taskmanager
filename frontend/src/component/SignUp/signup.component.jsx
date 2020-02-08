import React, { Component } from 'react'
import { SignInComponent } from '../SignIn'

class SignUpComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-label-group">
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-control"
            placeholder="firstname"
            required />
          <label htmlFor="firstname">Firstname</label>
        </div>
        <div className="form-label-group">
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-control"
            placeholder="Lastname"
            required />
          <label htmlFor="lastname">Lastname</label>
        </div>
        <SignInComponent />
      </React.Fragment>
    )
  }
}

export { SignUpComponent }

