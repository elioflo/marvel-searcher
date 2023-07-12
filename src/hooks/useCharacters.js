import { useEffect, useState } from 'react'
import { getCharacters } from '../api/characters'

const useCharacters = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
      .then((charactersList) => {
        setCharacters(charactersList) // <--- aca se cambia el estado
      })
      .finally(() => setIsLoading(false))

    return () => {
      // cleanup <-----
    }
  }, []) // <-----

  return [characters, isLoading]
}

export default useCharacters
