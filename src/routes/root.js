import { useLoaderData } from 'react-router-dom'
import getCharacters from '../characters'
import CharactersList from '../components/CharactersList'

export async function loader () {
  const characters = await getCharacters()
  return { characters }
}

export default function Root () {
  const { characters } = useLoaderData()
  return (
    <CharactersList characters={characters.data.data.results} />
  )
}
