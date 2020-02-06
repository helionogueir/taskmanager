import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import { Actions } from './actions'
import '../SignIn/style.css'

class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { firstname: '', lastname: '', username: '', password: '' }
  }
  handleFormSubmit = event => event.preventDefault()
  handleFirstnameChange = event => this.setState({ firstname: event.target.value })
  handleLastnameChange = event => this.setState({ lastname: event.target.value })
  handleUsernameChange = event => this.setState({ username: event.target.value })
  handlePasswordChange = event => this.setState({ password: event.target.value })
  handleButtonClick = async () => {
    const data = await Actions.signUp(this.state)
    alert(JSON.stringify(data))
  }
  render() {
    return (
      <div className="taskmanager-signin">
        <form className="form-signin" onSubmit={this.submitFormHandler}>
          <TitleComponent />
          <div className="form-label-group">
            <input
              value={this.state.firstname}
              onChange={this.handleFirstnameChange}
              type="text"
              id="firstname"
              className="form-control"
              placeholder="firstname"
              required />
            <label htmlFor="firstname">Firstname</label>
          </div>
          <div className="form-label-group">
            <input
              value={this.state.lastname}
              onChange={this.handleLastnameChange}
              type="text"
              id="lastname"
              className="form-control"
              placeholder="Lastname"
              required />
            <label htmlFor="lastname">Lastname</label>
          </div>
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
          <button
            type="button"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.handleButtonClick}
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

