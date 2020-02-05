import React, { Component } from 'react'
import { CreateProjectComponent } from '../../component/CreateProject'
import { ProjectComponent } from '../../component/Project'
import './style.css'

class ProjectContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="taskmanager-project-create">
          <CreateProjectComponent />
        </div>
        <div class="taskmanager-project-rows">
          <div class="row">
            <div class="col-4 col-md-4">
              <ProjectComponent />
            </div>
            <div class="col-4 col-md-4">
              <ProjectComponent />
            </div>
            <div class="col-4 col-md-4">
              <ProjectComponent />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export { ProjectContainer }

