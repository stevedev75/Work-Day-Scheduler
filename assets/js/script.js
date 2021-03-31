

var now = moment().format('LT'); 
console.log(now);

$(document).ready(function (){
  $('.saveBtn').on("click", function () {
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
        
    localStorage.setItem(time, text);
    console.log("save button clicked")        
})

function timeTracker() {
  var timeNow = moment().hour();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


$('.time-block').each(function () {
var blockTime = parseInt($(this).attr('id').split('hour')[1]
    );

    
if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}

else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}

else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
         }
    })
} 



timeTracker(); 
})