import checkResponse from './checkResponse.js';

export default function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
    .catch(res => Promise.reject(res))
}
