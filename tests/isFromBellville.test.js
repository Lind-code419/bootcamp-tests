describe('isFromBellville function test:' , function(){
    it('tests the isFromBellville function' , function(){
    assert.equal(isFromBellville('CY 123'), true);
	assert.equal(isFromBellville('CJ 123'), false);

    });

});
