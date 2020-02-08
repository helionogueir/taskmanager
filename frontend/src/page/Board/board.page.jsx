import React, { Component } from 'react'
import { ProjectContainer } from '../../container/Project'
import { SessionHelper } from '../../core/Helper'

class BoardPage extends Component {
  constructor(props) {
    super(props)
    this.state = { authorization: '', firstname: '', lastname: '', username: '' }
  }
  componentDidMount = () => {
    const sessionData = (new SessionHelper()).get()
    this.setState(sessionData)
  }
  render() {
    return (
      <main role="main">
        <div className="container">
          <ProjectContainer />
        </div>
      </main>
    )
  }
}

export { BoardPage }