import { Link, useRouteError } from 'react-router-dom'
import { styled } from 'styled-components'
import SearchBar from '../components/SearchBar'

const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(215,228,247,.25);
  min-height: 100vh;
  font-family: sans-serif;
  color: rgb(31, 45, 61);
`

const Home = styled(Link)`
  color: rgb(31, 45, 61);
`

const ErrorMessage = styled.div`
  background-color: rgba(255,0,0,.1);
  padding: 1rem;
  border-radius: .25rem;
`

export default function ErrorPage () {
  const error = useRouteError()
  return (
    <Container>
      <SearchBar />
      <Content>
        <ErrorMessage>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>status: {error.status}</p>
          <p>{error.data}</p>
          <Home to='/'>Go back home &rarr; </Home>
        </ErrorMessage>
      </Content>
    </Container>
  )
}
