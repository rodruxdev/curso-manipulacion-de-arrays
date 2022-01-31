const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1,2, [1, 2]]],
  [7, 8, 9],
];

function recursiveFlat(array, level = 1){
  const auxArray = [];
  if(level < 1) {
    return array;
  }
  array.map(element => {
    if(Array.isArray(element)){
      auxArray.push(...element)
    } else {
      auxArray.push(element)
    }
  });
  level -= 1;
  return recursiveFlat(auxArray, level);
}

const rta = recursiveFlat(matriz, 3);
console.log(rta);