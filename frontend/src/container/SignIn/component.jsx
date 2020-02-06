import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import './style.css'

class SignInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  handleFormSubmit = event => event.preventDefault()
  handleUsernameChange = event => this.setState({ username: event.target.value })
  handlePasswordChange = event => this.setState({ password: event.target.value })
  handleClick = event => alert(JSON.stringify(this.state))
  render() {
    return (
      <div className='taskmanager-signin'>
        <form className='form-signin'>
          <TitleComponent />
          <div className="form-label-group">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              required />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-label-group">
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required />
            <label htmlFor="password">Password</label>
          </div>
          <button className='btn btn-lg btn-primary btn-block' type='button'>Sign in</button>
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

