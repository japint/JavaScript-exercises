document.getElementById('test').innerHTML = 'This is changed by JavaScript';

document.getElementById('image').style.display = "block";

var x = 125;
var y = 125;

document.getElementById('add').innerHTML = x + y;

function changeMe() {
    document.getElementById('output').innerHTML = document.getElementById('test1').value;
}

function overMe() {
    document.getElementById('output2').innerHTML = document.getElementById('test2').value;
}
