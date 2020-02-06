const signUp = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/v1/accounts/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
  } catch (err) {
    console.error(err)
  }
}

export const Actions = {
  signUp
}