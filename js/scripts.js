//Using Jquery for the Akan names backend logic

var akanNames = function (year, month, day, gender) {
  // Akan name logic showing that we need yr,month,day and gender for the akan name functions

  var femaleNamesArray = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ]; // Female names Array
  var maleNamesArray = [
    "Kwasi",
    "Kudwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ]; //Male names Array
  var day = new Date(year, month, day); // Introduce Date object to work with date & time including days, months, years
  if (gender === "maleNamesArray") {
    return day && maleNamesArray[day.getDay()]; //Looping with if else conditional statements to compare days and names arrays
  } else {
    return day && femaleNamesArray[day.getDay()];
  }
};

//Introducing the front end logic by introducing the $( document ).ready() block

$(document).ready(function() { // Line one- We use  the $ convention instead of Jquery 
  $("form#form").submit(function(event) { 
    event.preventDefault();
    var year = parseInt($("#year").val());
    var month = parseInt($("#month").val());
    var day = parseInt($("#date").val());
    var gender = $("input:radio[name=gender]:checked").val();
    var result = akanNames(year, month, day, gender);
    alert("Your akan name is: " + result);
    //refresh page
    document.getElementById("form").reset();
});
});