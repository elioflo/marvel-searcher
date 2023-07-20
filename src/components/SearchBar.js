import { Form } from 'react-router-dom'

export default function SearchBar () {
  return (
    <Form method='get' action='/'>
      <input type='text' name='search' />
    </Form>
  )
}
