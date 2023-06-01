describe('The findItemsOver20 function' function()) {
    it("should return all the products that have a quantity higher than 20", function (){
        assert.deepEqual(results, findItemsOver(itemList, 20));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
        assert.deepEqual(results3, findItemsOver(itemList3, 20)); 
      
    });


