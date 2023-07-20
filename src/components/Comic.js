import React from 'react'
import { styled } from 'styled-components'

const ComicImage = styled.img`
`
const ComicContainer = styled.div`
`

const ComicText = styled.div`
`

const Title = styled.h1`
`

const Description = styled.p`
`

const Comic = ({ comic }) => {
  return (
    <ComicContainer>
      {comic.thumbnail && <ComicImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />}
      <ComicText>
        <Title>{comic.title}</Title>
        <Description>{comic.description}</Description>
      </ComicText>
    </ComicContainer>
  )
}

export default Comic
