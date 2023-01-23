// Display current date at the top of the page
const dayDisplay = $("#currentDay");

const currentD = moment().format("Do MMMM YYYY");

dayDisplay.text(currentD);

$(".row").each(function () {
  // change the colour of textarea when time changes
  var timeSection = $(this).attr("id");
  var hour = moment().format("HH");

  if (timeSection === hour) {
    $(this).addClass("present");
  } else if (timeSection < hour) {
    $(this).addClass("future");
    $(this).removeClass("present");
  } else {
    $(this).addClass("past");
    $(this).removeClass("future");
  }
  // show time in first column of each row
  var amPm = $(this).children(".hour").children().attr("id");
  $(this).children(".hour").children().text(amPm);
});

