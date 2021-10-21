$(document).ready(function() {
    $(".save-Btn").on("click",function() {
    var savedTaskToDo = $(this).siblings(".description").val();
    var timeDue = $(this).parent().attr("id");


    localStorage.setItem(timeDue, savedTaskToDo);
});


function getCurrentHour() {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
        var hourOfWorkTime = parseInt($(this).attr("id").split("-")[1]);

        if (hourOfWorkTime < currentHour) {
            $(this).addClass("past");
        }
       else if (hourOfWorkTime === currentHour) {
           $(this).removeClass("past");
           $(this).addClass("present");
       }
       else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
       }
     });
    }
getCurrentHour();

var currentDayEl = document.querySelector("#currentDay"); 
var today = moment();
currentDayEl.textContent = today.format("dddd, MMMM Do YYYY, h:mm a");



var interval = setInterval(getCurrentHour, 15000);

$("#amhour-8 .description").val(localStorage.getItem("amhour-8"));




$("#pmhour-12 .description").val(localStorage.getItem("pmhour-12"));

})
