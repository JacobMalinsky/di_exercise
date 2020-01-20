let number1;
let number2;
let sign;

function my_f(num){
	
	if(num != "+" && num != "-" && num != "/"){
		if(isNaN(number1)){
			number1 = num;
			console.log(number1);
		}
		else{
			number2 = num;
			console.log(number2);
		}
		console.log (num + number2 + number1);
} else{

	switch(num){
			case "+":
			sign = num;
			break;

			case "-":
			sign = num;
			break;

			case "/":
			sign = num;
			break;
		}	
     }
}

function calc(){
	let answer;

	switch(sign){
		case "+":
		answer = number1 + number2;

			break;

			case "-":
			answer = number1 - number2;
			break;

			case "/":
			answer = number1 / number2;
			break;
			
	console.log (answer);
	}
alert("your answer is" + answer);
}