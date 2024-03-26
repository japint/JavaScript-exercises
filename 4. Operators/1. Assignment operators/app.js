var add = 123;
console.log('Before: ' + add);
add += 50; //The same as x = x + 50
console.log('After: ' + add);

var sub = 10;
console.log('Subtract then assign')
console.log('Before: ' + sub);
sub -= 50; //The same as x = x - 50
console.log('After: ' + sub);

var multi = 10;
console.log('Multiply then assign')
console.log('Before: ' + multi);
multi *= 3; //The same as x = x * 50
console.log('After: ' + multi);

var div = 100;
console.log('Divide then assign')
console.log('Before: ' + div);
div /= 50; //The same as x = x / 50
console.log('After: ' + div);

var remainder = 10;
console.log('Get the remainder then assign')
console.log('Before: ' + remainder);
remainder %= 3; //The same as x = x % 50
console.log('After: ' + remainder);

var x = 15;
var y = '30';
var z = x + y;

console.log('String Operations: ');
console.log(typeof z);
console.log(z);