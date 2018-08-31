function sumItems(array) {
  // Sum all the numbers in the array
  // let sum = 0;
  // for (var i = 0; i < array.length; i++) {
  //   sum = sum + array[i];
  // }
  // return sum;
  let sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);

    } else {
      sum += item;
    }

  }

  return sum;


}

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;