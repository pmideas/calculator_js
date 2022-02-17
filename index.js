function view(num) {
	var answer = document.getElementById("answer")
	answer.value += num;
}


function clr() {
	var answer = document.getElementById("answer").value = "";
}


function eql() {
	var x = document.getElementById("answer").value;
	var y = eval(x)
	document.getElementById("answer").value = y;
}