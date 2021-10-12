const months = ['March', 'Jan', 'Feb', 'Dec'];

const numbers = [1, 30, 4, 21, 100000];

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 1, 15),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 10),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 1, 1, 20),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 8),
  },
];

months.sort();
console.log(months)
numbers.sort((a,b) => a - b);
console.log(numbers);
numbers.sort((a,b) => b - a);
console.log(numbers);
words.sort();
// words.sort((a,b) => a.localeCompare(b)); Para navegadores no modernos y otros lenguajes.
console.log(words);
orders.sort((a,b) => b.total - a.total);
console.log(orders);