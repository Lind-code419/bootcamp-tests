describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)

    });

});

