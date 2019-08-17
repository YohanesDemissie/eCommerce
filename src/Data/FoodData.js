export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
{
    name: 'Bacon & Olives',
    img: './img/bacon-olives.jpeg',
    section: 'Pizza',
    price: 1.30
  },
  {
    name: 'Chefs Daily special',
    img: './img/chefs-special.jpeg',
    section: 'Pizza',
    price: 1.50
  },
  {
    name: 'Classic Cheese',
    img: './img/classic-cheese.jpeg',
    section: 'Pizza',
    price: 1.09
  },
  {
    name: 'Fiery Jalepeno',
    img: './img/firey-jalepeno.jpeg',
    section: 'Pizza',
    price: 1.35
  },
  {
    name: 'Garden Special',
    img: './img/garden-special.jpeg',
    section: 'Pizza',
    price: 1.75
  },
  {
    name: 'Garlic Ham',
    img: './img/garlic-ham.jpeg',
    section: 'Pizza',
    price: 1.45
  },
  {
    name: 'Italian Mozzerela Special',
    img: './img/italian-mozzy-special.jpeg',
    section: 'Pizza',
    price: 1.99
  },
  {
    name: 'Supreme Sausage',
    img: './img/supreme-sausage.jpeg',
    section: 'Pizza',
    price: 1.75

  },
  {
    name: 'Zesty Italian',
    img: './img/zesty-italian.jpeg',
    section: 'Pizza',
    price: 1.35
  },
  {
    name: 'Supreme Italian Combo',
    img: './img/supreme-italian-combo.jpg',
    section: 'Pizza',
    price: 1.75
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