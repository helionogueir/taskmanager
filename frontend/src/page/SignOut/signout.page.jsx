import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SessionHelper } from '../../core/Helper'

class SignOutPage extends Component {
  componentDidMount = () => {
    (new SessionHelper()).destroy()
  }
  render() {
    return (
      <main role="main">
        <br />
        <div className="container text-center">
          <h3>See You</h3>
        </div>
        <div className="mb-3 text-center">
          <Link to={"/signin"}>Sign in</Link>
        </div>
        <br />
      </main>
    )
  }
}

export { SignOutPage }