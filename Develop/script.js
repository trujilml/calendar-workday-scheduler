// figure out how to get date and time and dat in title header
//continue html calendar format - figure out how to have all time the same without repeating multiple ids


var currentDayEl = document.querySelector("#currentDay");
var today = moment();

currentDayEl.textContent = today.format("dddd, MMMM Do YYYY, h:mm a");