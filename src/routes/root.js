import { useLoaderData } from 'react-router-dom'
import getCharacters from '../api/characters'
import CharactersList from '../components/CharactersList'
import SearchBar from '../components/SearchBar'
import { styled } from 'styled-components'
import getCharacter from '../api/character'

export async function loader ({ request }) {
  const query = request.url.split('?')[1]
  const characters = await getCharacters(new URLSearchParams(query))
  return { characters }
}

export async function favoritesLoader () {
  const resultado = []
  // eslint-disable-next-line no-undef
  for (const response of Object.keys(localStorage).map(id => getCharacter(id))) {
    try {
      const character = await response
      resultado.push(character.data.data.results[0])
    } catch (error) {
      console.log(error)
    }
  }
  const characters = {
    data:
    {
      data: {
        results: resultado
      }
    }
  }
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
