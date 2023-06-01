console.log("greet.js");



describe('Greet function test' , function(){
    it('greet function:' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
		assert.equal(greet('Sam'), 'Hello, Sam');
    });

});
