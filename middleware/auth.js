import jwt from 'jsonwebtoken'

const Expired = (token) => {
  const payload = jwt.decode(token)
  if (+payload.exp > new Date() / 1000) {
    return true
  } else {
    localStorage.removeItem('auth-token')
    return false
  }
}
const authenticate = (context) => {
  const authToken = localStorage.getItem('auth-token')
  if (authToken && Expired(authToken)) {
    context.$axios.setToken(authToken, 'Bearer')
    return true
  } else {
    context.redirect('/login')
  }
}

export default function (context) {
  return authenticate(context)
}
