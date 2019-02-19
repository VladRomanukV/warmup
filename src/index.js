module.exports = function warmup(temperature) {
// your implementation here 
	var celcGradus = +prompt('Enter your number to convert from Celsius to Fahrenheit', 0); 
	var umn = 9/5; 
	var sum = 32; 

	return (celcGradus * umn) + sum; 

}; 

warmup(); 