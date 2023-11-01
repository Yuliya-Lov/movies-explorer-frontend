import request from './request.js';
import {BASE_MOVIES_URL} from '../utils/config.js';

export const allMovies = () => {
  return request(
    `${BASE_MOVIES_URL}/beatfilm-movies`,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
    .catch(res => Promise.reject(res))
}
