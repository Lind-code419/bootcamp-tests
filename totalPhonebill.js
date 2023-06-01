var totalPhoneBill = function(itemstring) {
	var calls = 0;
  	var smses = 0;
   	var item = itemString.split(',');
  	console.log(item);
  
  	for (i =0; i < item.length; i++) {
    	console.log(item[i]);
      	if (item[i].includes('call')) {
        	calls++;
        }
      	else {
        	smses++
        }
    
    }
  var callcost = calls * 2.75;
  var smscost = smses * 0.65;
  var billtotal = (callcost + smscost);
  return 'R'+ billtotal.toFixed(2);
}var totalPhoneBill = function(itemString) {
	var calls =
