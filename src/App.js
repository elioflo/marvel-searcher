import CharactersList from './components/CharactersList'
import MarvelHeader from './components/MarvelHeader'
import useCharacters from './hooks/useCharacters'

function App () {
  const [characters, isLoading] = useCharacters()
  return (
    <div className='App'>
      <MarvelHeader />
      {isLoading ? <div>Loading...</div> : <CharactersList characters={characters} />}
    </div>
  )
}

export default App
