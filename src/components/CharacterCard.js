import React from 'react'
import styled from 'styled-components'

const CharacterCard = ({ name, thumbnail }) => {
  console.log(thumbnail)
  const imgUrl = `${thumbnail.path}.${thumbnail.extension}`
  const Card = styled.div`
    box-sizing: border-box;
    width: 250px;
    position: relative;
    border-radius: .25rem; 
    `
  const CharacterImage = styled.img`
    width: 100%;
    border-radius: .25rem; 
  `
  const CharacterName = styled.h1`
    color: white;
    position: absolute;
    bottom: 0;
    left: 1rem;
  `
  return (
    <Card>
      <CharacterName>{name}</CharacterName>
      <CharacterImage src={imgUrl} />
    </Card>
  )
}

export default CharacterCard
