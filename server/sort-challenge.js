
const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 8, 1, 15),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 2, 1, 10),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2020, 1, 1, 20),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(1998, 1, 1, 8),
  },
];

orders.sort((a,b) => b.date - a.date);
console.log(orders);