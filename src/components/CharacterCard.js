import React, { useState } from 'react'
import styled from 'styled-components'
import ComicList from './ComicsList'

const Card = styled.div`
    box-sizing: border-box;
    width: 14rem;
    position: relative;
    border-radius: .25rem; 
    height: 20rem;
    box-shadow: 0 0 .5rem .125px rgba(0,0,0,.5);
    `
const CharacterImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: .25rem; 
  `
const CharacterName = styled.h1`
    color: white;
    position: absolute;
    font-family: sans-serif;
    font-size: 1rem;
    bottom: 1rem;
    left: 1rem;
    margin: 0;
  `

const DarkBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, black, transparent, transparent, black);
    border-radius: 0.25rem; 
  `

const CharacterCard = ({ character }) => {
  const [click, setClick] = useState(false)
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <>
      <Card onClick={() => setClick(true)}>
        <DarkBackground />
        <CharacterName>{character.name}</CharacterName>
        <CharacterImage src={imgUrl} />
      </Card>
      {click && <ComicList characterId={character.id} close={() => setClick(false)} />}
    </>
  )
}

export default CharacterCard
