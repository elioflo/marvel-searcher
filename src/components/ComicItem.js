import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ImageItem = styled.img`
  width: 5rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .75rem;
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

const ComicItem = ({ comic }) => {
  console.log(comic)
  return (
    <Item>
      <Link to={`comic/${comic.id}`}>

        {comic.images.length && <ImageItem src={`${comic.images[0].path}.${comic.images[0].extension}`} />}
        <TextItem>
          <Title>{comic.title}</Title>
          <Description>{comic.description}</Description>
        </TextItem>
      </Link>
    </Item>
  )
}

export default ComicItem
