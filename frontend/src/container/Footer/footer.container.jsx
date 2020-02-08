import React, { Component } from 'react'
import './style.css'

class FooterContainer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">Helio Nogueira</p>
          <p>Task Manager</p>
        </div>
      </footer>
    )
  }
}

export { FooterContainer }