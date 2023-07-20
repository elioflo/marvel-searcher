import React, { useEffect, useState } from 'react'
import ComicItem from './ComicItem'
import { styled } from 'styled-components'
import getComics from '../comics'

const Background = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,.25);
  z-index: 90;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
`

const Container = styled.div`
  width: calc(100% - 2rem);
  margin: auto;
  background-color: white;
  max-width: 30rem;
  max-height: 30rem;
  border-radius: .25rem;
  color: #505050;
  display: grid;
  grid-template-rows: auto 1fr;
`

const CloseButton = styled.button`
  border: none;
  background-color: white;
  font-size: 1.25rem;
  color: #505050;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2rem);
  margin: auto;
`

const Name = styled.h1`
  font-family: sans-serif;
  margin: .75rem 0;
`

const List = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`

const ComicList = ({ name, characterId, close }) => {
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
        <Header>
          <Name>{name}</Name>
          <CloseButton onClick={close}>X</CloseButton>
        </Header>
        <List>
          {comics && comics.data.data.results.length > 0 && comics.data.data.results.map(comic => <ComicItem comic={comic} key={comic.id} />)}
        </List>
      </Container>
    </Background>
  )
}

export default ComicList
