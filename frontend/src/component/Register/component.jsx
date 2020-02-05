import React, { Component } from 'react'
import { LoginComponent } from '../Login'

class RegisterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-label-group">
          <input type="text" id="firtname" className="form-control" placeholder="Firtname" required autofocus />
          <label for="firtname">Firtname</label>
        </div>
        <div className="form-label-group">
          <input type="text" id="lastname" className="form-control" placeholder="Lastname" required autofocus />
          <label for="lastname">Lastname</label>
        </div>
        <LoginComponent />
      </React.Fragment>
    )
  }
}

export { RegisterComponent }

