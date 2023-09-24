import request from './request.js';
/* export const BASE_URL = 'http://localhost:4000'; */
export const BASE_URL = 'https://api.mymovies.nomoredomainsicu.ru/';

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

export const getUser = () => {
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
}

export const updateUser = ({ email, name }) => {
  return request(
    `${BASE_URL}/users/me`,
    {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        'email': email,
        'name': name
      })
    }
  )
}

export const getMovies = () => {
  return request(
    `${BASE_URL}/movies`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    }
  )
}

export const saveMovie = (movie) => {
  return request(
    `${BASE_URL}/movies`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        'country': movie.country,
        'director': movie.director,
        'duration': movie.duration,
        'year': movie.year,
        'description': movie.description,
        'image': 'https://api.nomoreparties.co' + movie.image.url,
        'trailerLink': movie.trailerLink,
        'nameRU': movie.nameRU,
        'nameEN': movie.nameEN,
        'thumbnail': 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        'id': movie.id,
      }
      )
    }
  )
}

export const deleteMovie = (_id) => {
  return request(
    `${BASE_URL}/movies/${_id}`,
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    }
  )
}
