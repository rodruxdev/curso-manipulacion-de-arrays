const products = [
  {title: "Pizza", price: 121, id: "🍕"},
  { name: "Burger", price: 121, id: '🍔' },
  { name: "Hot cakes", price: 121, id: '🥞' },
];

const productIndex=products.findIndex(product => product.id === '🍔');
const productsWithoutBurger = [...products];
if(productIndex != -1) {
  productsWithoutBurger.splice(productIndex,1);
}

console.log('Original', products)
console.log('Modified', productsWithoutBurger)

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicioso'
  }
}

const productIndex1 = products.findIndex(product => product.id === '🥞');
const productsHotCakeEdited = [...products];
if(productIndex1 != -1) {
  productsHotCakeEdited[productIndex1]= {
    ...productsHotCakeEdited[productIndex1],
    ...update.changes,
  };
}

console.log('Original', products)
console.log('Hot Cake Modified', productsHotCakeEdited)