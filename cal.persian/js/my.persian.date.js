const date = new persianDate();

document.querySelector(".date h1").innerHTML = date.format("MMMM")

document.querySelector(".date p").innerHTML = date.format("dddd - D - MM - YYYY");

const monthDays = document.querySelector(".days");

const lastDays = date.daysInMonth()

const a = new persianDate([date.calendar().year,date.calendar().month+1,1]);
const firstDayIndex = a.calendar().weekday-1

const b = new persianDate([date.calendar().year,date.calendar().month-1]);
const prevLastDay = a.daysInMonth()

const c = new persianDate([date.calendar().year,date.calendar().month+1,date.daysInMonth()]);
const lastDayIndex = c.calendar().weekday
const nextDay = 7 - lastDayIndex 

let days="";

for (let x=firstDayIndex; x>0 ; x--){
    days += `<div class="prev-date">${prevLastDay-x+1}</div>`;
}

for (let i=1; i<=lastDays; i++){
    days += `<div>${i}</div>`;
}

for (let j=1 ; j<=nextDay ; j++){
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
}

console.log(nextDay);


console.log(lastDayIndex);