const elements = ['Fire', 'Air', 'Water'];

let rta = '';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rta = rta + element + separator;
}
console.log(rta)

const rta1 = elements.join('--');
console.log(rta1)

const title = 'Curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);