import React from 'react'
import ComicItem from './ComicItem'
import { styled } from 'styled-components'

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

const ComicList = ({ comics = [], close }) => {
  console.log(comics)
  return (
    <Background>
      <Container>
        <CloseButton onClick={close}>CERRAR</CloseButton>
        {comics.map(comic => <ComicItem comic={comic} key={comic.id} />)}
      </Container>
    </Background>
  )
}

export default ComicList
