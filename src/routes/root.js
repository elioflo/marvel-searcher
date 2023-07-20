import { useLoaderData } from 'react-router-dom'
import getCharacters from '../api/characters'
import CharactersList from '../components/CharactersList'
import SearchBar from '../components/SearchBar'
import { styled } from 'styled-components'

export async function loader ({ request }) {
  const query = request.url.split('?')[1]
  console.log(query)
  const characters = await getCharacters(new URLSearchParams(query))
  return { characters }
}

const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`

export default function Root () {
  const { characters } = useLoaderData()
  return (
    <Container>
      <SearchBar />
      <CharactersList characters={characters.data.data.results} />
    </Container>
  )
}
