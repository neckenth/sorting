



describe('Bubble Sort', function(){

    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough();
    });

    it ('number of swap calls should be less than or equal to the len of the array squared', function() {
        let array = [2,5,7,1,3,20,15];
        window.bubbleSort(array);
        expect(window.swap.calls.count()).not.toBeGreaterThan(array.length * array.length);
    });

    //we wanted to set the spy on these other two cases, but couldn't figure out how
    //do they need to all be in separate spy blocks?
    
    //     array = [];
    //     window.bubbleSort(array);
    //     expect(window.swap.calls.count()).not.toBeGreaterThan(0);

    //     array = [1];
    //     window.bubbleSort(array);
    //     expect(window.swap.calls.count()).not.toBeGreaterThan(0);
    // })

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
