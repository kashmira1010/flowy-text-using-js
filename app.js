//adding event listerners
document.getElementById("btn1").addEventListener("click", left);
document.getElementById("btn2").addEventListener("click", pause);
document.getElementById("btn3").addEventListener("click", right);

//adding interval function and left function.
var interval;

function left(){
	clearInterval(interval);
	interval = setInterval(function(){
			var text1 = document.getElementById('text1').value;
			var x = document.getElementById('text2').value += text1.substring(0,1);
			document.getElementById('text1').value = text1.substring(1);
	},1000);	
}

// adding pause button function
function pause(){
	clearInterval(interval);
}

// right to left flowing text
function right(){
	clearInterval(interval);
	interval = setInterval(function(){
			var text2 = document.getElementById('text2').value;
			document.getElementById('text1').value = text2.substring(text2.length-1) + document.getElementById("text1").value;
			document.getElementById('text2').value = text2.substring(0,text2.length-1);	
	},1000);
}