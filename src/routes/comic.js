import { useLoaderData } from 'react-router-dom'
import getComic from '../comic'
import Comic from '../components/Comic'

export async function loader ({ params }) {
  const comic = await getComic(params.comicId)
  return { comic }
}

export default function Comics () {
  const { comic } = useLoaderData()
  return (
    <Comic comic={comic.data.data.results[0]} />
  )
}
