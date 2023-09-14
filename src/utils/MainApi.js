import request from './request.js';
export const BASE_URL = 'http://localhost:4000';
/* export const BASE_URL = 'https://api.mymovies.nomoredomainsicu.ru/'; */

export const register = (name, email, password) => {
  return request(
    `${BASE_URL}/signup`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    }
  )
    .catch(res => Promise.reject(res))
}

export const login = (email, password) => {
  return request(
    `${BASE_URL}/signin`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    }
  )
    .catch(res => Promise.reject(res))
}
export const logout = () => {
  return request(
    `${BASE_URL}/signout`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    }
  )
    .catch(res => Promise.reject(res))
}

export const checkToken = () => {
  return request(
    `${BASE_URL}/users/me`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    }
  )
    .catch(res => Promise.reject(res))
}
