import * as sportsData from './sports'
import * as animalData from './animals'
const { default: sports} = sportsData
const { default: animals } = animalData

const categories = {
  sports,
  animals
}

export { categories }
