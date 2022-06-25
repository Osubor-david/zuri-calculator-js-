const num1 = parseFloat(prompt("input your first number"))
const num2 = parseFloat(prompt("input your second number"))
const sign = prompt("add one of this + - / *")
let result = 0
         	
	if (sign == '+') {
	   result = num1 + num2

	}
	else if (sign == '-') {
		result = num1 - num2
	}
		else if (sign == '*') {
		result = num1 * num2
	}
		else {
		result = num1 / num2
	}
	  alert(`${num1} ${sign} ${num2} = ${result}`
	  	) 
