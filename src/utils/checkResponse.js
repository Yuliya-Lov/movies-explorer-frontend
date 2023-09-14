export default function checkResponse(response) {
  console.log(response)
  return (response.ok
    ? response.json()
    : Promise.reject(response))
}


