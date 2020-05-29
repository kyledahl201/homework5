$(document).ready(function(){
// listen for save clicks

$(".saveBtn").on("click", function(){
//get values in bar
var value = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

//save as localStorage

localStorage.setItem(time.value);


});

//hour updater function

function hourUpdater() {
        // get current number of hours 

        var currentHour = moment().hours();

        //loop for time blocks

        $(".time-block").each(function() {

                var blockHour = parseInt($(this).attr("id").split("-")[]);

                // check if time is past 

                if (blockHour < currentHour) {

                        $(this).removeClass("past");
                        $(this).addClass("present");
                }else{
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }





        });




}





})