import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import { RegisterComponent } from '../../component/Register'
import '../SignIn/style.css'

class SignUpContainer extends Component {
  render() {
    return (
      <div className="taskmanager-signin">
        <form className="form-signin">
          <TitleComponent />
          <RegisterComponent />
          <button className="btn btn-lg btn-primary btn-block" type="button">Sign up</button>
          <br />
          <div className="mb-3 text-center">
            <Link to={"/"}>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export { SignUpContainer }

