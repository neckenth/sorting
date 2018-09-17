describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
});