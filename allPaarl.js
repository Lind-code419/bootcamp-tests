
function allPaarl(regos) {
	let regNumbersForPaarl = [];	
  	var regos2 =regos.trim();
  	var regEach = regos2.split(',');
	for (var i =0; i <regEach.length; i++) {
        	console.log(regEach[i].trim().startsWith('CJ'));

    	if (regEach[i].trim().startsWith('CJ')) {
    		regNumbersForPaarl.push(regEach[i].trim());
    	}
    
    }
	console.log(regNumbersForPaarl);	
  return regNumbersForPaarl;
}
