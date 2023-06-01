function findItemsOver20(list) {
  	var listIndex = [];
	for (i = 0; i < list.length; i++) {
    	console.log(list[i]);
      	if (list[i].qty > 20) {
        	listIndex.push(list[i]);
        	}
     	}
  console.log(listIndex);
  return listIndex;
}

function findItemsOver(list,quantity) {
	var listIndex = [];	
  	for (i = 0; i < list.length; i++) {
    	console.log(list[i]);
      	if (list[i].qty > quantity) {
        	listIndex.push(list[i]);
        	}
     	}
  console.log(listIndex);
   return listIndex;
}
