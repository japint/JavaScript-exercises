document.write("<h1>Something</h1>");


function openDoor() {
    document.getElementById("door").src = "../../resources/img/open.png";
    document.getElementById("header").innerHTML = "Welcome to our house!";
}

function closeDoor() {
    document.getElementById("door").src = "../../resources/img/close.png";
    document.getElementById("header").innerHTML = "Thank you, come again!";
}
