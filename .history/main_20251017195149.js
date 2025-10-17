const din = document.getElementById("din"); 
const day = document.getElementById("day"); 
const mon = document.getElementById("mon"); 
const year = document.getElementById("year"); 

const today = new Date();

console.log(today);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

din.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];