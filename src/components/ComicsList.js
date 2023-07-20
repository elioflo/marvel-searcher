import React, { useEffect, useState } from 'react'
import ComicItem from './ComicItem'
import { styled } from 'styled-components'
import getComics from '../comics'

const Background = styled.div`
  position: absolute;
  background-color: red;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top:0;
`

const Container = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
`

const CloseButton = styled.button`
  margin-left: auto;
`

const ComicList = ({ characterId, close }) => {
  const [comics, setComics] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComics(characterId)
        setComics(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    console.log(comics)
  }, [])
  return (
    <Background>
      <Container>
        <CloseButton onClick={close}>CERRAR</CloseButton>
        {comics && comics.data.data.results.length > 0 && comics.data.data.results.map(comic => <ComicItem comic={comic} key={comic.id} />)}
      </Container>
    </Background>
  )
}

export default ComicList
