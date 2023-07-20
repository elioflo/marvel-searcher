import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

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

const CharactersList = ({ characters = [] }) => {
  return (
    <Container>
      <CardList>
        {characters.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
          />
        ))}
      </CardList>
    </Container>
  )
}

export default CharactersList
