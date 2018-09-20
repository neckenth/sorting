describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect( split([1, 2, 3, 4]) ).toEqual( [[1, 2], [3, 4]]);
        expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1, 2], [3, 4, 5]]);
      // your code here 
    });
  });

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge([1, 2, 3], [4, 5, 6]) ).toEqual( [1, 2, 3, 4, 5, 6]);
        expect( merge([3, 4, 9, 10], [1, 2, 7]) ).toEqual( [1, 2, 3, 4, 7, 9, 10]);
        expect( merge([1, 2, 7], [3, 4, 9, 10]) ).toEqual( [1, 2, 3, 4, 7, 9, 10]);
    // test the merging algorithm
    });
});

describe('Merge Sort function', function() {
    it('is able to sort an array using split and merge functions', function() {
        expect( mergeSort([5, 2, 8, 10, 1, 13, 48, 7]) ).toEqual( [1, 2, 5, 7, 8, 10, 13, 48]);
    })
})