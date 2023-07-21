import axios from 'axios'

export default async function getCharacters (params) {
  const apikey = process.env.REACT_APP_PUBLIC_KEY
  const hash = process.env.REACT_APP_MD5HASH
  const ts = process.env.REACT_APP_TS
  try {
    if (params.size > 0) {
      if (params.get('search')) {
        const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${params.get('search')}`)
        return response
      }

      if (params.get('character')) {
        const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&nameStartsWith=${params.get('character')}`)
        return response
      }
    }
    const random = Math.ceil(Math.random() * 1001)
    const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?offset=${random}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
