var dateToday = new Date();

var dateString = dateToday.toDateString();

document.querySelector('#header').innerHTML = dateString;
