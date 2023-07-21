import { useState } from 'react'
import { styled } from 'styled-components'

const Svg = styled.svg`
  position: absolute;
  right: .75rem;
  top: .75rem;
  color: ${props => props.$isFavorite ? 'yellow' : 'white'};
`

function saveCharacter (character) {
  // eslint-disable-next-line no-undef
  localStorage.setItem(character.id, character)
}

function isSaved (character) {
  // eslint-disable-next-line no-undef
  return localStorage.getItem(character.id) && true
}

function removeCharacter (character) {
  // eslint-disable-next-line no-undef
  localStorage.removeItem(character.id)
}

export default function Star ({ character }) {
  const [isFavorite, setIsFavorite] = useState(isSaved(character))
  return (
    <Svg
      onClick={() => {
        if (isFavorite) {
          removeCharacter(character)
        } else {
          saveCharacter(character)
        }
        setIsFavorite(!isFavorite)
      }}
      $isFavorite={isFavorite}
      xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill={isFavorite ? 'currentColor' : 'none'} stroke='currentColor'
      strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-star'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </Svg>
  )
}
