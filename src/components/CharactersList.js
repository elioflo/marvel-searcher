import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    position: relative;
    background-color: rgba(215,228,247,.25);
    min-height: 100vh;
  `

const CardList = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 65rem;
  gap: 1.5rem;
  padding: 2.5rem 0;
  `
const NotFountMessage = styled.div`
  background-color: rgba(255,0,0,.1);
  padding: 1rem;
  border-radius: .25rem;
`

const Home = styled(Link)`
  color: rgb(31, 45, 61);
  display: block;
`

const CharactersList = ({ characters = [] }) => {
  return (
    <Container>
      <CardList>
        {characters.length
          ? characters.map((character) => (
            <CharacterCard
              character={character}
              key={character.id}
            />))
          : <NotFountMessage>We couldn't find that character. Try another one!<Home to='/'>Go back home &rarr; </Home></NotFountMessage>}
      </CardList>
    </Container>
  )
}

export default CharactersList
