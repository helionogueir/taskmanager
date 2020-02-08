import React, { Component } from 'react'
import { ProjectService } from '.'

class CreateProjectComponent extends Component {
  handleFormSubmit = event => event.preventDefault()
  handleFormChange = event => {
    let value = {}
    value[`${event.target.name}`] = event.target.value
    this.setState(value)
  }
  handleCreateInClick = async () => {
    const result = await (new ProjectService()).create(this.state)
    if (result && result._id) {
      this.props.loadProjects()
    } else {
      alert(JSON.stringify(result))
    }
  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.handleFormChange} onChange={this.handleFormChange}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Create a New Project</h3>
            <div className="form-label-group">
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Project Name"
                required />
              <label htmlFor="name">Project Name</label>
            </div>
            <button
              className='btn btn-lg btn-primary btn-block'
              type='button'
              onClick={this.handleCreateInClick}
            >Create Project</button>
          </div>
        </div>
      </form>
    )
  }
}

export { CreateProjectComponent }

