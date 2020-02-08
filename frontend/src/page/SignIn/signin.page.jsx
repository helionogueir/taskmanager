import React, { Component } from 'react'
import { SignInContainer } from '../../container/SignIn'
import { SessionHelper } from '../../core/Helper'

class SignInPage extends Component {
  componentDidMount = () => {
    (new SessionHelper()).destroy()
  }
  render() {
    return (
      <main role="main">
        <SignInContainer />
      </main>
    )
  }
}

export { SignInPage }