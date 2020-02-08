import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TaskComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title">To Do</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <label><input type="checkbox" />
              <span>Task 01</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
          <li className="list-group-item">
            <label><input type="checkbox" />
              <span>Task 02</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
          <li className="list-group-item">
            <label><input type="checkbox" />
              <span>Task 03</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
        </ul>
        <br />

        <h5 className="card-title">To Do</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <label><input type="checkbox" checked />
              <span>Task 01</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
          <li className="list-group-item">
            <label><input type="checkbox" checked />
              <span>Task 02</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
          <li className="list-group-item">
            <label><input type="checkbox" checked />
              <span>Task 03</span>
              <Link className="fas fa-trash-alt"></Link>
            </label>
          </li>
        </ul>
        <br />
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="taskname" className="sr-only">Password</label>
            <input type="text" className="form-control" id="taskname" name="taskname" placeholder="Task Name" />
          </div>
          <button type="submit" className="btn btn btn-success mb-2">Add</button>
        </form>
      </React.Fragment>
    )
  }
}

export { TaskComponent }

