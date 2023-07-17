import axios from 'axios'

export default async function getCharacters () {
  const apikey = process.env.REACT_APP_PUBLIC_KEY
  const hash = process.env.REACT_APP_MD5HASH
  const ts = process.env.REACT_APP_TS
  try {
    const response = axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
