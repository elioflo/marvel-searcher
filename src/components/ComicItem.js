import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ImageItem = styled.img`
  width: 5rem;
`
const Item = styled(Link)`
  width: calc(100% - 2rem);
  margin: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: .75rem;
  color: black;
  text-decoration: none;
  font-family: sans-serif;
  color: #505050;
  `

const TextItem = styled.div`
  display:inline-block;
  margin-bottom: auto;
  `

const Title = styled.h1`
  font-size: .8rem;
  `

const Description = styled.p`
  font-size: .8rem;
`

function getImgUrl (comic) {
  return `${comic.images[0].path}.${comic.images[0].extension}`
}

const ComicItem = ({ comic }) => {
  return (
    <Item to={`comic/${comic.id}`}>
      {comic.images.length && <ImageItem src={getImgUrl(comic)} />}
      <TextItem>
        <Title>{comic.title}</Title>
        <Description>{comic.description}</Description>
      </TextItem>
    </Item>
  )
}

export default ComicItem
