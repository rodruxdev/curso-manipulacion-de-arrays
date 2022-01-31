const products = [
  {title: "Pizza", price: 121, id: "🍕"},
  { name: "Burger", price: 121, id: '🍔' },
  { name: "Hot cakes", price: 121, id: '🥞' },
];

const myProducts = [];
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1){
  myProducts.push(products[productIndex]);
  products.splice(productIndex,1);
}

console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("-".repeat(10));

const products2 = [
  {title: "Pizza", price: 121, id: "🍕"}, 
  { name: "Burger", price: 121, id: '🍔' },
  { name: "Hot cakes", price: 121, id: '🥞' },
];
const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicioso'
  }
}
const productIndex2 = products2.findIndex(item => item.id === update.id);
products2[productIndex2] = {
  ...products2[productIndex2],
  ...update.changes,
}
console.log(products2)
