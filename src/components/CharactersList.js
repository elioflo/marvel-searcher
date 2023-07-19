import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    position: relative;
  `

const CharactersList = ({ characters = [] }) => {
  return (
    <CardList>
      {characters.map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
        />
      ))}
    </CardList>
  )
}

export default CharactersList
