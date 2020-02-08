import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderContainer } from './container/Header'
import { FooterContainer } from './container/Footer'
import { SignInPage } from './page/SignIn'
import { SignUpPage } from './page/SignUp'
import { SignOutPage } from './page/SignOut'
import { BoardPage } from './page/Board'

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderContainer />
        <Route exact path='/' component={SignInPage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/signout' component={SignOutPage} />
        <Route path='/board' component={BoardPage} />
        <FooterContainer />
      </Router>
    )
  }
}

export { App }
