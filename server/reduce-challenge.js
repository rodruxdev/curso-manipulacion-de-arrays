const totals = [1,2,3,4,5,6,7,8,9,10];

const ranges = [0,5,8,10]

const result = totals.reduce((histogram, number) => {
  if(number > ranges[0] && number <= ranges[1]) {
    if(!histogram[`${ranges[0]+1}-${ranges[1]}`]) {
      histogram[`${ranges[0]+1}-${ranges[1]}`] = 0;
    }
    histogram[`${ranges[0]+1}-${ranges[1]}`] += 1;
  }
  if(number > ranges[1] && number <= ranges[2]) {
    if(!histogram[`${ranges[1]+1}-${ranges[2]}`]) {
      histogram[`${ranges[1]+1}-${ranges[2]}`] = 0;
    }
    histogram[`${ranges[1]+1}-${ranges[2]}`] += 1;
  }
  if(number > ranges[2] && number <= ranges[3]) {
    if(!histogram[`${ranges[2]+1}-${ranges[3]}`]) {
      histogram[`${ranges[2]+1}-${ranges[3]}`] = 0;
    }
    histogram[`${ranges[2]+1}-${ranges[3]}`] += 1;
  }
  return histogram;
}, {});

console.log(result)