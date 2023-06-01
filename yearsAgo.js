var yearsAgo = function(year) {
	dateCurrent = new Date();
  	dateCurrent = dateCurrent.getFullYear();
  	console.log(dateCurrent);
  	yearsAgo1 = dateCurrent - year;
  	console.log(yearsAgo1);
  	return yearsAgo1;
}
