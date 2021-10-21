$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

    $(".saveBtn").on("click",function() {
    var savedTaskToDo = $(this).siblings(".description").val();
    var timeDue = $(this).parent().attr("id");

    localStorage.setItem(timeDue, savedTaskToDo);
})

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


function getCurrentHour() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
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

})





