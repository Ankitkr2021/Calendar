const din = document.getElementById("din"); 
const day = document.getElementById("day"); 
const mon = document.getElementById("mon"); 
const year = document.getElementById("year"); 

const today = new Date();

console.log(today);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February","March","April","May","June","July","August","September","October","November", "December"]; 

din.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];
mon.innerHTML = month[today.getMonth()];
year.innerHTML = today.getFullYear();