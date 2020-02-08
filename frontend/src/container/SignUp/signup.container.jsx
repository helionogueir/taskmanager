import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import { SignUpComponent } from '../../component/SignUp'
import { SignUpService } from '.'
import { SessionHelper } from '../../core/Helper'
import '../SignIn/signin.style.css'

class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { firstname: '', lastname: '', username: '', password: '' }
  }
  handleFormSubmit = event => event.preventDefault()
  handleFormChange = event => {
    let value = {}
    value[`${event.target.name}`] = event.target.value
    this.setState(value)
  }
  handleSignUpClick = async () => {
    const result = await (new SignUpService()).create(this.state)
    if (result && result.id) {
      (new SessionHelper()).create(result)
      window.location.replace('/board')
    } else {
      alert(JSON.stringify(result))
    }
  }
  render() {
    return (
      <div className="taskmanager-signin">
        <form className="form-signin" onSubmit={this.handleFormChange} onChange={this.handleFormChange} >
          <TitleComponent />
          <SignUpComponent />
          <button
            type="button"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.handleSignUpClick}
          >Sign up</button>
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

