var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);

var countRegNumber = function(rego1) {
	regoarray = rego1.split(',');
  	console.log(regoarray);
	regCount = regoarray.length;
  	return regCount;
}
