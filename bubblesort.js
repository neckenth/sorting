function swap (val1, val2) {
  let temp = val1;
  val1 = val2;
  val2 = temp;
  return [val1, val2];
}

function bubbleSort (array) {
  let isSorted = false;
  let maxIdx = array.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < maxIdx; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false;
        let newOrder = swap(array[i], array[i + 1]);
        array[i] = newOrder[0];
        array[i + 1] = newOrder[1];        
      }
    }
    maxIdx--;
  }
  return array;
}


bubbleSort([1, 5, 3, 7, 9, 2]);
