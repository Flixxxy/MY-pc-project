function time(){
	var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(time, 1000);

}

