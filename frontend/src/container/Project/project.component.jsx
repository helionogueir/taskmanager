import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProjectService } from '.'

class ProjectComponent extends Component {
  render() {
    return (
      <div className="taskmanager-component-project card">
        <div className="card-header taskmanager-component-project-head">
          <div className="row">
            <div className="col-8 col-md-8">{this.props.name}</div>
            <div className="text-right col-4 col-md-4">
              <span className="fas fa-pen"></span>
              <span className="fas fa-trash-alt"></span>
            </div>
          </div>
        </div>
        <div className="card-body taskmanager-component-project-body">
        </div>
      </div>
    )
  }
}

export { ProjectComponent }

