import { Form, Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: .75rem 0;
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 99;
  box-shadow: 0 .25rem .25rem rgba(0,0,0,.1);
`

const Logo = styled.img`
  height: 2.25rem;
`

const Star = styled.img`
`

const SearchText = styled.input`
  padding: .5rem 1rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 40rem;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  max-width: 65rem;
  margin: auto;
`

export default function SearchBar () {
  return (
    <Container>
      <Header>
        <Link to='/'>
          <Logo src='/marvel-logo.svg' />
        </Link>
        <Form method='get' action='/'>
          <SearchText type='text' name='search' />
        </Form>
        <Star src='/star.svg' />
      </Header>
    </Container>
  )
}
