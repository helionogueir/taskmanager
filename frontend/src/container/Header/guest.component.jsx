import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GuestGreeting extends Component {
  render() {
    return (
      <ul className="nav navbar-nav mr-auto justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      </ul>
    )
  }
}

export { GuestGreeting }