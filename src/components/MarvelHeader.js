import React from 'react'
import { styled } from 'styled-components'

const Header = styled.header`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
`

const MarvelHeader = () => (
  <Header>
    <img src='/marvel-logo.svg' />
    <form>
      <input type='text' />
    </form>
    <input type='checkbox' />
  </Header>
)

export default MarvelHeader
