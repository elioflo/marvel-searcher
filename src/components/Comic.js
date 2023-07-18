import React from 'react'

const Comic = ({ comic }) => {
  console.log(comic)
  console.log(comic.images)
  return (
    <div>
      {comic.images.length && <img src={`${comic.images[0].path}.${comic.images[0].extension}`} />}
      <h1>{comic.title}</h1>
      <p>{comic.description}</p>
    </div>
  )
}

export default Comic
