import { SessionHelper } from '../../core/Helper'

export class ProjectService {
  constructor() {
    this.session = (new SessionHelper()).get()
  }
  create = async data => {
    try {
      const response = await fetch('http://localhost:3000/v1/projects', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.authorization}`
        },
        body: JSON.stringify(data)
      })
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
  findAll = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/projects', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.session.authorization}`
        }
      })
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
}