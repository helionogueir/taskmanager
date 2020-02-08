import React, { Component } from 'react'
import { SignUpContainer } from '../../container/SignUp'
import { SessionHelper } from '../../core/Helper'

class SignUpPage extends Component {
  componentDidMount = () => {
    (new SessionHelper()).destroy()
  }
  render() {
    return (
      <main role="main">
        <SignUpContainer />
      </main>
    )
  }
}

export { SignUpPage }