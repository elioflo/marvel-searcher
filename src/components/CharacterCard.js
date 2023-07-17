import React, { useState } from 'react'
import styled from 'styled-components'
import ComicList from './ComicsList'

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

const CharacterCard = ({ character }) => {
  const [click, setClick] = useState(false)
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`
  return (
    <Card onClick={() => setClick(!click)}>
      <CharacterName>{character.name}</CharacterName>
      <CharacterImage src={imgUrl} />
      {click && <ComicList comics={character.comics.items} />}
    </Card>
  )
}

export default CharacterCard
