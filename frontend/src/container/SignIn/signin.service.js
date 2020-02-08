

export class SignInService {
  create = async data => {
    try {
      const response = await fetch('http://localhost:3000/v1/accounts/signin', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      })
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
}