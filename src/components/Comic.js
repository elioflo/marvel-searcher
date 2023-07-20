import React from 'react'
import { styled } from 'styled-components'

const ComicImage = styled.img`
  width: 100%;
  @media (width < 555px) {
    width: calc(100% - 4rem);
    margin: auto;
    margin-top: 4rem;
  }
`
const ComicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100% - 4rem);
  gap: 5rem;
  max-width: 55rem;
  margin: 5rem auto ;
  @media (width < 555px) {
    display: flex;
    flex-direction: column;
  }
`

const ComicText = styled.div`
  font-family: sans-serif;
  color: rgb(31, 45, 61);
  @media (width < 555px) {
    width: calc(100% - 4rem);
    margin: auto;
  }
`

const Title = styled.h1`
`

const Description = styled.p`
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(215,228,247,.25);
  min-height: 100vh;
`

const Comic = ({ comic }) => {
  return (
    <Container>
      <ComicContainer>
        {comic.thumbnail && <ComicImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />}
        <ComicText>
          <Title>{comic.title}</Title>
          <Description>{comic.description}</Description>
        </ComicText>
      </ComicContainer>
    </Container>
  )
}

export default Comic
