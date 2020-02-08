import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import { SignInComponent } from '../../component/SignIn'
import { SignInService } from '.'
import { SessionHelper } from '../../core/Helper'
import './signin.style.css'

class SignInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  handleFormSubmit = event => event.preventDefault()
  handleFormChange = event => {
    let value = {}
    value[`${event.target.name}`] = event.target.value
    this.setState(value)
  }
  handleSignInClick = async () => {
    const result = await (new SignInService()).create(this.state)
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
        <form className="form-signin" onSubmit={this.handleFormChange} onChange={this.handleFormChange}>
          <TitleComponent />
          <SignInComponent />
          <button
            type="button"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.handleSignInClick}
          >Sign in</button>
          <br />
          <div className='mb-3 text-center'>
            <Link to={'/signup'}>Sing up</Link>
          </div>
        </form>
      </div>
    )
  }
}

export { SignInContainer }

