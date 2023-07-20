import { useLoaderData } from 'react-router-dom'
import getCharacters from '../characters'
import CharactersList from '../components/CharactersList'

export async function loader ({ request }) {
  const query = request.url.split('?')[1]
  console.log(query)
  const characters = await getCharacters(new URLSearchParams(query))
  return { characters }
}

export default function Root () {
  const { characters } = useLoaderData()
  return (
    <CharactersList characters={characters.data.data.results} />
  )
}
