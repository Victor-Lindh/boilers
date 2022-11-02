const four_legs = {
  category: 'animals',
  subCategory: 'mammals',
  value: 'four_legs',
  label: 'Four legs',
  animals: [
   'Elephant',
   'Pig',
   'Bear',
   'Fox',
   'Dog',
   'Cat',
   'Wolf',
   'Lion',
   'Sheep',
   'Horse',
   'Squirrel',
   'Monkey',
]}


const animal_types = {
  ...four_legs
}


export default [
  { 
    category: 'animals',
    subCategory: 'mammals',
    data: animal_types
  }
]