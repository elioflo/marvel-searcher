import { useLoaderData } from 'react-router-dom'
import getComic from '../comic'
import Comic from '../components/Comic'
import SearchBar from '../components/SearchBar'
import { styled } from 'styled-components'

export async function loader ({ params }) {
  const comic = await getComic(params.comicId)
  return { comic }
}

const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`

export default function Comics () {
  const { comic } = useLoaderData()
  return (
    <Container>
      <SearchBar />
      <Comic comic={comic.data.data.results[0]} />
    </Container>
  )
}
