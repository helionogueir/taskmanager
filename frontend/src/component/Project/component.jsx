import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class ProjectComponent extends Component {
  render() {
    return (
      <div className="taskmanager-component-project card">
        <div className="card-header taskmanager-component-project-head">
          <div className="row">
            <div className="col-8 col-md-8">Project A</div>
            <div className="text-right col-4 col-md-4">
              <span class="fas fa-pen"></span>
              <span class="fas fa-trash-alt"></span>
            </div>
          </div>
        </div>
        <div class="card-body taskmanager-component-project-body">
          <h5 class="card-title">To Do</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <label><input type="checkbox" />
                <span>Task 01</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
            <li class="list-group-item">
              <label><input type="checkbox" />
                <span>Task 02</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
            <li class="list-group-item">
              <label><input type="checkbox" />
                <span>Task 03</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
          </ul>
          <br />

          <h5 class="card-title">To Do</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <label><input type="checkbox" checked />
                <span>Task 01</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
            <li class="list-group-item">
              <label><input type="checkbox" checked />
                <span>Task 02</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
            <li class="list-group-item">
              <label><input type="checkbox" checked />
                <span>Task 03</span>
                <Link class="fas fa-trash-alt"></Link>
              </label>
            </li>
          </ul>
          <br />
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">Password</label>
              <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn btn-success mb-2">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export { ProjectComponent }

