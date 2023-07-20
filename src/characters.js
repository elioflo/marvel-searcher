import axios from 'axios'

export default async function getCharacters (params) {
  const apikey = process.env.REACT_APP_PUBLIC_KEY
  const hash = process.env.REACT_APP_MD5HASH
  const ts = process.env.REACT_APP_TS
  try {
    if (params.size > 0) {
      const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${params.get('search')}`)
      console.log(response)
      return response
    } else {
      const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`)
      return response
    }
  } catch (error) {
    console.log(error)
  }
}
