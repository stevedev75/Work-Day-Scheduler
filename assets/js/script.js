var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var now = moment().format('LT'); 
console.log(now);

var time;

var schdElNine = $('input[name="inputNine"]').val();
var schdElTen = $('input[name="inputTen"]').val();
var schdElEleven = $('input[name="inputEleven"]').val();
var schdElTwelve = $('input[name="inputTwelve"]').val();
var schdElOne = $('input[name="inputOne"]').val();
var schdElTwo = $('input[name="inputTwo"]').val();
var schdElThree = $('input[name="inputThree"]').val();
var schdElFour = $('input[name="inputFour"]').val();
var schdElFive = $('input[name="inputFive"]').val();


// if (time = "now") {
// add class .present to div class description};
// }
// else if (time = "past") {
// add class .past to div class description);
// }
// else {
// add class.future to div class description);
// };




// how to get "saveBtn" to save to local storage??