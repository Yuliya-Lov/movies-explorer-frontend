import request from './request.js';
export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const allMovies = () => {
  return request(
    `${BASE_URL}`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
    .catch(res => Promise.reject(res))
}
