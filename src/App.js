// import { styled } from 'styled-components'
// import CharactersList from './components/CharactersList'
// import useCharacters from './hooks/useCharacters'
// import { useState } from 'react'

// const Header = styled.header`
//   display: flex;
//   gap: 1rem;
//   padding: 0.5rem 1rem;
// `

// function App () {
//   const [characters, isLoading] = useCharacters()
//   const [text, setText] = useState('')
//   return (
//     <div className='App'>
//       <Header>
//         <img src='/marvel-logo.svg' />
//         <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
//         <input type='checkbox' />
//       </Header>
//       {isLoading ? <div>Loading...</div> : <CharactersList characters={characters} />}
//     </div>
//   )
// }

import axios from 'axios'
import { useEffect, useState } from 'react'

function App () {
  const [personajes, setPersonajes] = useState({})
  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=77f6724f54e61f81c5c57baa0aa7e913&hash=55c06b5e56fcd9a8d8c389f167d476f1')
      .then(resolve => {
        setPersonajes(resolve.data)
      }).catch(error => console.log(error))
  }, [])
  return <div>{JSON.stringify(personajes)}</div>
}

export default App
