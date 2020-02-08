export class SessionHelper {
  create = account => {
    this.destroy()
    if (account
      && account.id
      && account.authorization
      && account.firstname
      && account.lastname
      && account.username
    ) {
      window.localStorage.setItem(
        'id', account.id)
      window.localStorage.setItem(
        `${account.id}.authorization`, account.authorization)
      window.localStorage.setItem(
        `${account.id}.firstname`, account.firstname)
      window.localStorage.setItem(
        `${account.id}.lastname`, account.lastname)
      window.localStorage.setItem(
        `${account.id}.username`, account.username)
    }
  }
  destroy = () => {
    window.localStorage.clear()
    const sessionId = window.localStorage.getItem('id')
    if (sessionId) {
      window.localStorage.removeItem(`${sessionId}.authorization`)
      window.localStorage.removeItem(`${sessionId}.firstname`)
      window.localStorage.removeItem(`${sessionId}.lastname`)
      window.localStorage.removeItem(`${sessionId}.username`)
    }
  }
  get = () => {
    const sessionId = window.localStorage.getItem('id')
    if (sessionId) {
      return {
        authorization: window.localStorage.getItem(`${sessionId}.authorization`),
        firstname: window.localStorage.getItem(`${sessionId}.firstname`),
        lastname: window.localStorage.getItem(`${sessionId}.lastname`),
        username: window.localStorage.getItem(`${sessionId}.username`)
      }
    }
    return
  }
}