import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    position: relative;
    background-color: rgba(215,228,247,.5);
    padding: 3rem 0;
  `

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 65rem;
  gap: 1.5rem;
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
