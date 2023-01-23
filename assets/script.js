// Display current date (day, month and year) at the top of the page
const dayDisplay = $("#currentDay");

const currentD = moment().format("Do MMMM YYYY");

dayDisplay.text(currentD);

// use jQuery to loop through each .row element to compare current hour to time block
$(".row").each(function () {
  // change the colour of textarea when time changes
  var timeSection = $(this).attr("id");
  var hour = moment().format("HH");
  var targetEl = $(this).children().eq(1);
  
  if (timeSection === hour) {
    targetEl.addClass("present");
  } else if (timeSection < hour) {
    targetEl.addClass("future");
    targetEl.removeClass("present");
  } else {
    targetEl.addClass("past");
    targetEl.removeClass("future");
  }
  // show time in first column of each row
  var amPm = $(this).children(".hour").children().attr("id");
  $(this).children(".hour").children().text(amPm);
});

$(".save-button").on("click", (e) => {
  // store user's input associated with particular save button into a variable
  var storeItem = $(e.currentTarget).parent().children().eq(1).val();
  // store clicked box (the time) into a variable
  var time = $(e.currentTarget).parent().attr("id");
  // set item into local storage (as a key: value pair)
  localStorage.setItem(time, storeItem);
});

// Retrieve previous user inputs from local storage and display them 
$("#09 .time-block").val(localStorage.getItem("09"));
$("#10 .time-block").val(localStorage.getItem("10"));
$("#11 .time-block").val(localStorage.getItem("11"));
$("#12 .time-block").val(localStorage.getItem("12"));
$("#13 .time-block").val(localStorage.getItem("13"));
$("#14 .time-block").val(localStorage.getItem("14"));
$("#15 .time-block").val(localStorage.getItem("15"));
$("#16 .time-block").val(localStorage.getItem("16"));
$("#17 .time-block").val(localStorage.getItem("17"));

// create a function that clears user data from local storage
var clear = () => {
    localStorage.clear();
    $("textarea").val("")
}

// when 'clear data' button is clicked, clear function is executed
$("#clear-button").on("click", clear);