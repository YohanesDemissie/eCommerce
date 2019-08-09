export const foodItems = [
  {
    name: 'Bacon & Olives',
    img: './img/bacon-olives.jpeg'
  },
  {
    name: 'Chefs Daily special',
    img: './img/chefs-special.jpeg'
  },
  {
    name: 'Classic Cheese',
    img: './img/classic-cheese.jpeg'
  },
  {
    name: 'Fiery Jalepeno',
    img: './img/firey-jalepeno.jpeg'
  },
  {
    name: 'Garden Special',
    img: './img/garden-special.jpeg'
  },
  {
    name: 'Garlic Ham',
    img: './img/garlic-ham.jpeg'
  },
  {
    name: 'Italian Mozzerela Special',
    img: './img/italian-mozzy-special.jpeg'
  },
  {
    name: 'Supreme Sausage',
    img: './img/supreme-sausage.jpeg'
  },
  {
    name: 'Zesty Italian',
    img: './img/zesty-italian.jpeg'
  },
  {
    name: 'Supreme Italian Combo',
    img: './img/supreme-italian-combo.jpg'
  }
]

// SEE CHAPTER 3 FOR FURTHER INTAKE ON LOWER FUNCTION
// resuce takes the same value "res" and current value "food". Like array and iterator
export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = []; // this becomes the key in the final key value pair object
  }
  res[food.section].push(food); //food section becomes the key and the the index value of the food items become the "value"
  return res; 
}, {}); //The object is the initial value here and 2nd argument in the reduce method. this is what we'll be pushing too