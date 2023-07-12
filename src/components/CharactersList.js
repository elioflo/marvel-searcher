import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CharactersList = ({ characters = [] }) => {
  const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  `
  return (
    <CardList>
      {characters.map((character) => (
        <CharacterCard
          name={character.name}
          thumbnail={character.thumbnail}
          key={character.id}
        />
      ))}
    </CardList>
  )
}

export default CharactersList
