


describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
		assert.equal(greet('Sam'), 'Hello, Sam');
    });

});

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);
