

// Display current date at the top of the page
const day = $("#currentDay");

const currentD = moment().format('Do MMMM YYYY');

day.text(currentD);