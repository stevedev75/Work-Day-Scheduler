var now = moment().format('LT'); 
console.log(now);

$(document).ready(function (){
  $('.saveBtn').on("click", function () {
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

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


tracker(); 
})