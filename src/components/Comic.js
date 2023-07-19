import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const ImageItem = styled.img`
`
const Item = styled.div`
`

const TextItem = styled.div`
`

const Title = styled.h1`
`

const Description = styled.p`
`

const Comic = ({ comic }) => {
  console.log(comic)
  return (
    <Item>
      {comic.thumbnail && <ImageItem src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />}
      <TextItem>
        <Title>{comic.title}</Title>
        <Description>{comic.description}</Description>
      </TextItem>
    </Item>
  )
}

export default Comic
