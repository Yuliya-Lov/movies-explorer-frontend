export default function checkResponse(response) {
  return (response.ok
    ? response.json()
    : Promise.reject(response))
}


