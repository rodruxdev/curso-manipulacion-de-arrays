const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 40) {
    rta = false;
    break;
  }
}
console.log(rta);

//vs

const rta2 = numbers.every(item => item <= 40);
console.log(rta2);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const challenge = team.every(player => player.age <= 15);
console.log(challenge)