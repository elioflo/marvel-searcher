import charactersMock from '../mock/characters.json'

export const getCharacters = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
  return charactersMock
}
