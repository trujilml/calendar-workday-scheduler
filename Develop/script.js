// document function presents current day id with the date format using moment.js, 
// day.js is implemented to illustrate the format and is mainly used for the time retrieval of the getCurrentHour function.
// the save button is implemented with its variables attached by the description from the text-area part of the planner 
// and the id representing the time hour. both are set to a user's local storage by the set item added on.


$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")); //moment.js

    dayjs("#currentDay").format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"); //day.js
    
    $(".saveBtn").on("click",function() {
    var savedTaskToDo = $(this).siblings(".description").val();
    var timeDue = $(this).parent().attr("id");

    localStorage.setItem(timeDue, savedTaskToDo);
})

//retrieval of stored timehour elements saved on the user's local storage using getitem
$("#timehour-8 .description").val(localStorage.getItem("timehour-8"));
$("#timehour-9 .description").val(localStorage.getItem("timehour-9"));
$("#timehour-10 .description").val(localStorage.getItem("timehour-10"));
$("#timehour-11 .description").val(localStorage.getItem("timehour-11"));
$("#timehour-12 .description").val(localStorage.getItem("timehour-12"));
$("#timehour-13 .description").val(localStorage.getItem("timehour-13"));
$("#timehour-14 .description").val(localStorage.getItem("timehour-14"));
$("#timehour-15 .description").val(localStorage.getItem("timehour-15"));
$("#timehour-16 .description").val(localStorage.getItem("timehour-16"));
$("#timehour-17 .description").val(localStorage.getItem("timehour-17"));


//rest of function runs on day.js and jquery function. current hour function retrieves current time of the work day by hour in a 24-hour clock time format, 
//implements css elements that determine whether a to-do is late ("past"),
//due ("present"), and to be done by ("future"). function reruns at the end,
function getCurrentHour() {
    var currentHour = dayjs().hour(); //day.js

    $(".time-block").each(function () { //jquery
        var hourOfWorkTime = parseInt($(this).attr("id").split("timehour-")[1]); 

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
     })
    }

getCurrentHour();

});




