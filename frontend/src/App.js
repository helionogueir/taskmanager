import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderComponent } from './component/Header'
import { FooterComponent } from './component/Footer'
import { SignInPage } from './page/SignIn'
import { SignUpPage } from './page/SignUp'
import { BoardPage } from './page/Board'

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <Route exact path='/' component={SignInPage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/board' component={BoardPage} />
        <FooterComponent />
      </Router>
    )
  }
}

export { App }
