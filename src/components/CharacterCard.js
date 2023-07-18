import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ComicList from './ComicsList'
import getComics from '../comics'

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
  const [comics, setComics] = useState({})
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComics(character.id)
        setComics(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Card onClick={() => setClick(true)}>
      <CharacterName>{character.name}</CharacterName>
      <CharacterImage src={imgUrl} />
      {click && <ComicList comics={comics.data.data.results} />}
    </Card>
  )
}

export default CharacterCard
