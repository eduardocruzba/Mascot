
export default async function httpGet(path) {
  //  let hash = await getCredentials()
    //const url = `https://gateway.marvel.com:443/${path}?apikey=${PUBLIC_KEY}&hash=${hash}&ts=1`
    const url = `https://api.petfinder.com/${path}`
    
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIn0.eyJhdWQiOiJPeW1md2NnM3VsakdwQTcyT2dzZTNwT0d5NWJWanpybkR3TnZ6RUNuTEpiTmI5S3U0RiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIiwiaWF0IjoxNTYxNTg3OTMzLCJuYmYiOjE1NjE1ODc5MzMsImV4cCI6MTU2MTU5MTUzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.C4bQYqFsvD2zq2dk3Ki0rfNWROo4fKFQDSpN72B0BvU1loYbYwzeju57kxe0YSdeS2_IgYmQZpWkyJll45XzuTLb-KZOVLmvqRSDmMkWWXW1S8s-JoR18azbwdA2mgor-vKeaTRWG4G5yJDGxNQ0tAEqsEowEELIj9Bro4hRmkHZRHo8xiYowA5AN4lufTjDF3A6xO3Y7byX3OC8rXRNi7ATxc5dVzXsi1Et0_N2y3m9fvlbI1qXeICbWS5QvvdYzCxe_agLWSwWz57LtJHDZcIyjf95-6Th6kdpmlQhkkdFxqUgR7TRl4AJITDB6pvEhh7XsbZxwLFuiA2oP_NW7g'

      }
    })
    return response.json()
  }
