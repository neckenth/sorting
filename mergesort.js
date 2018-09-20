function split(arr) {
    let left, right;
    let half = arr.length / 2;

    left = arr.slice(0, half);
    right = arr.slice(half);
    return [left, right];
  }

function merge(left, right) {
    let leftI = 0
    let rightI = 0
    let result = []
    while(leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            result.push(left[leftI]);
            leftI++;
        } else {
            result.push(right[rightI]);
            rightI++;
        }
    }
    if (left[leftI]) {
        for (let i = leftI; i < left.length; i++) {
            result.push(left[i]);
        }
    } else if (right[rightI]){
        for (let j = rightI; j < right.length; j++) {
            result.push(right[j]);
        }
    }
    return result;
}

function mergeSort(arr) {
    let left, right, splits
    if (arr.length < 2) {
        return arr;
    } else {
        splits = split(arr);
        left = splits[0];
        right = splits[1];
        return merge(mergeSort(left), mergeSort(right));
    }
}