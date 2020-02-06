import React, { Component } from 'react'

class CreateProjectComponent extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Create a New Project</h3>
          <div className="form-label-group">
            <input type="text" id="projectname" className="form-control" placeholder="Project Name" required />
            <label for="projectname">Project Name</label>
          </div>
          <button className='btn btn-lg btn-primary btn-block' type='button'>Create Project</button>
        </div>
      </div>
    )
  }
}

export { CreateProjectComponent }

