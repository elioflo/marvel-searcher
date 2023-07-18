import { useLoaderData } from 'react-router-dom'
import getComics from '../comics'

export async function loader ({ params }) {
  const comics = await getComics(params.characterId)
  return { comics }
}

export default function Comics () {
  const { comics } = useLoaderData()
  return (
    <div>
      {JSON.stringify(comics)}
    </div>
  )
}
