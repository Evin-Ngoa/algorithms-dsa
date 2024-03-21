/**
 * Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has its corresponding value 
 * squared in the second array. The frequency of values must be the same.
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counterObj1 = {};
  let counterObj2 = {};

  for (val of arr1) {
    counterObj1[val] = (counterObj1[val] || 0) + 1;
  }

  for (val of arr2) {
    counterObj2[val] = (counterObj2[val] || 0) + 1;
  }

  console.log(counterObj1);
  console.log(counterObj2);

  for (key in counterObj1) {
    // check indexes match
    if (!(key ** 2) in counterObj2) {
      return false;
    }

    // check frequency if match
    if (counterObj1[key ** 2] !== counterObj2[key]) {
      return false;
    }
  }

  return true;
}

same([1, 2, 5, 5, 6], [36, 25, 25, 4, 36]); // false
same([1, 2, 5, 5, 6], [1, 25, 25, 4, 36]); // true
