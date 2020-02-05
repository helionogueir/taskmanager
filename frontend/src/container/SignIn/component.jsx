import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TitleComponent } from '../../component/Title'
import { LoginComponent } from '../../component/Login'
import './style.css'

class SignInContainer extends Component {
  render() {
    return (
      <div className='taskmanager-signin'>
        <form className='form-signin'>
          <TitleComponent />
          <LoginComponent />
          <button className='btn btn-lg btn-primary btn-block' type='button'>Sign in</button>
          <br />
          <div className='mb-3 text-center'>
            <Link to={'/signup'}>Sing up</Link>
          </div>
        </form>
      </div>
    )
  }
}

export { SignInContainer }

