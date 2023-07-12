import CharactersList from './components/CharactersList'
import useCharacters from './hooks/useCharacters'

function App () {
  const [characters, isLoading] = useCharacters()
  return (
    <div className='App'>
      <h1>Render list: </h1>
      {isLoading ? <div>Loading...</div> : <CharactersList characters={characters} />}
    </div>
  )
}

export default App
