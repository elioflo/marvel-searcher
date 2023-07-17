import React from 'react'
import Comic from './Comic'

const ComicList = ({ comics = [] }) => {
  console.log(comics)
  return (
    <div>
      {comics.map(comic => <Comic comic={comic} key={comic.name} />)}
    </div>
  )
}

export default ComicList
