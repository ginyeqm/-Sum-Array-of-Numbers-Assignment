function sumItems(array) {
  // Sum all the numbers in the array
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result += sumItems(array[i])
        } else {
            result += array[i];
        }
    }
    return result;
}


module.exports = sumItems;

// console.log(sumItems([[[5], [[[4]]], [[3], 2]], 1, []]));
// console.log(sumItems([[1, 2, [[3], 4]], 5, []]))


