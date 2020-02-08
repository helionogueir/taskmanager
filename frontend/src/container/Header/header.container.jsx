import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserGreeting } from './user.component'
import { GuestGreeting } from './guest.component'
import { SessionHelper } from '../../core/Helper'


class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">EDirectInsure TODO List</Link>
          <div className="collapse navbar-collapse">
          </div>
          {(new SessionHelper()).get() ? (<UserGreeting />) : (<GuestGreeting />)}
        </nav>
      </header>
    )
  }
}

export { HeaderContainer }