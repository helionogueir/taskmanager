import React, { Component } from 'react'
import { ProjectContainer } from '../../container/Project'

class BoardPage extends Component {
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