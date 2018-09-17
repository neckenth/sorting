function split(wholeArray) {
    let firstHalf, secondHalf;
    let halfLen = Math.floor(wholeArray.length / 2);

    firstHalf = wholeArray.slice(0, halfLen);
    secondHalf = wholeArray.slice(halfLen);
  
    return [firstHalf, secondHalf];
  }

function merge(arrayOne, arrayTwo) {
    let counterOne = 0
    let counterTwo = 0
    let resultArray = []
    while(arrayOne[counterOne] || arrayTwo[counterTwo]) {
        if(arrayOne[counterOne] && arrayTwo[counterTwo]) {
            if(arrayOne[counterOne] < arrayTwo[counterTwo]) {
                resultArray.push(arrayOne[counterOne])
                counterOne++
            } else {
                resultArray.push(arrayTwo[counterTwo])
                counterTwo++
            }
        } else {
            if(arrayOne[counterOne]) {
                resultArray.push(arrayOne[counterOne])
                counterOne++
            } else {
                resultArray.push(arrayTwo[counterTwo])
                counterTwo++
            }
        }
    }
    return resultArray
}

function mergeSort(array) {
    let arrayOne = split(array)
    let arrayTwo = split(arrayOne[0]);
    console.log(arrayTwo)
    while (!Array.isArray(arrayTwo[0]) && arrayTwo.length !== array.length) {
        for(let i = 1; i < arrayOne.length; i++) {
            arrayTwo = arrayTwo.concat(split(arrayOne[i]));
            console.log(arrayTwo)
        }
    }
    console.log(arrayTwo);
}



    // if (Array.isArray(newArr[0]) && newArr.length === array.length) {
    //     console.log(array);
    //     return newArray;
    // } else {
    //     newArr = split(array)
    //     while()
    //     if (!Array.isArray(array[0])) {
    //         // console.log(array)
    //         array = split(array);
    //         mergeSort(array);
    //     } else {
    //         let counter = array.length;
    //         console.log(counter)
    //         array.map(elem => split(elem));
    //         console.log(array)

            //what if split logic was all here in a for loop instead of using recursion on the whole func
            // for (let i = 0; i < array.length; i++) {

            // }
            // while (counter > 0) {
            //     array.push(split(array.shift()));
            //     counter--;
            // }
    //     }
    //     return mergeSort(array);
    // }


















    // if (array[0].length === 1) {
    //     console.log(array);
    //     return array;
    // } else {
    //     arrOfArrs = split(array);
    //     // array = arrOfArrs;
    //     mergeSort(arrOfArrs);
    //     // arrOfArrs.forEach(elem => mergeSort(elem));
    //     // console.log(array)
    //     // console.log(arrOfArrs);

    // }
// }