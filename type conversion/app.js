var message = 'Type conversion';

document.querySelector('#header').innerHTML = message

console.log(message)

console.log(typeof 'String');
console.log(typeof 1234);

//String();
//Converts the value of the string 
console.log(typeof String(123));
console.log(String(1234) + String(1234));

//Number();
//Convert the value to a number
console.log(typeof Number('123'));
console.log(Number('128') + Number('128'));

//parseInt();
//Parses a string or a variable into an integer
console.log(parseInt(12.34));

//parseFloat();
//Parses a string or variable in to a floating point number
console.log('Parse Float: ' + parseFloat(12.34));

