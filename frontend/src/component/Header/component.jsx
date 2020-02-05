import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">EDirectInsure TODO List</Link>
          <div className="collapse navbar-collapse">
          </div>
          <ul className="nav navbar-nav mr-auto justify-content-end">
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Joaquim Silva</span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <span>Sign Out</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export { HeaderComponent }