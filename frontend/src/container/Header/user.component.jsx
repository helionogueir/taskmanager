import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SessionHelper } from '../../core/Helper'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = { fullname: '' }
  }
  componentDidMount = () => {
    const sessionData = (new SessionHelper()).get()
    this.setState({ fullname: `${sessionData.firstname || ''} ${sessionData.lastname || ''}` })
  }
  render() {
    return (
      <ul className="nav navbar-nav mr-auto justify-content-end">
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.fullname}
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/signout">Sign out</Link>
          </div>
        </li>
      </ul>
    )
  }
}

export { UserGreeting }