import React, { Component } from 'react'
import { ReactComponent as Logo } from './logo.svg'

class TitleComponent extends Component {
  render() {
    return (
      <div className="text-center mb-4">
        <Logo />
        <h3 className="h3 mb-3 font-weight-normal">Task Manager</h3>
        <p>A simple task manager</p>
      </div>
    )
  }
}

export { TitleComponent }

