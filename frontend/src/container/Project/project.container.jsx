import React, { Component } from 'react'
import { CreateProjectComponent, ProjectComponent, ProjectService } from '.'
import './project.style.css'

class ProjectContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [], countRow: 0 }
  }
  componentDidMount = () => {
    this.loadProjects()
  }
  loadProjects = async () => {
    const result = await (new ProjectService()).findAll()
    if (result instanceof Array) {
      this.setState({ projects: result })
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="taskmanager-project-create">
          <CreateProjectComponent loadProjects={this.loadProjects} />
        </div>
        <div className="taskmanager-project-rows">
          <div className="row">
            {this.state.projects.map(project => (
              <div key={project._id} className="col-4 col-md-4">
                <ProjectComponent loadProjects={this.loadProjects} {...project} />
                <br />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export { ProjectContainer }

