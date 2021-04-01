var now = moment().format('LT'); 
console.log(now);

$(document).ready(function (){
  $('.saveBtn').on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).prev().val();
    localStorage.setItem(time, text);
    console.log(this);
    console.log(text);


    console.log("save button clicked")        
})

function tracker() {
  var rightNow = moment().hour();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


$('.time-block').each(function () {
var blockTime = parseInt($(this).attr('id')
    );

if (blockTime < rightNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}

else if (blockTime === rightNow) {
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

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
tracker(); 
})