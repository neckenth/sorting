describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  })
  it ('handles an array with one element', function (){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it ('handles an array with multiple elements', function (){
    expect( bubbleSort([2,5,7,1,3,20,15]) ).toEqual( [1,2,3,5,7,15,20] );
  });
});
