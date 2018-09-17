function bubbleSort (array) {
  let isSorted = false;
  let maxIdx = array.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < maxIdx; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false;
        //swap
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    maxIdx--;
  }
  return array;
}
