function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        const changeNumberPosition = array[j + 1];
        array[j + 1] = array[j];
        array[j] = changeNumberPosition;
      }
    }
  }
  return array;
}

console.log(BubbleSort([9, 3, 11, 2, 99, 43]));