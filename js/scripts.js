function dayOfTheWeek(century, year, day, month) {
  var date = new Date();
  var n = date.getDay()
  return dayOfTheWeek
}

function getname(day, gender) {
  if (gender == "male") {
    switch (day) {
      case 1:
        return "Kwasi";
    }
  } else {
    switch (day) {
      case 1:
        return "Akosua";
    }
  }
}
function inputs(date, month, year, gender) {
  if (date > 31 || date < 1) {
    alert("Please enter a valid date");
    return;
  }
  if (month > 12 || month < 1) {
    alert("Please enter a valid month");
    return;
  }
  if (year < 999) {
    alert("Please enter a valid year");
    return;
  }
  if (gender != "male" && gender != "female") {
    console.log(gender);
    alert("Please enter a valid gender");
    return;
  }
  console.log("inputs are valid");
  var century = year.substring(0, 2);
  var day = dayOfTheWeek(century, year, date, month);
  var name = getname(day, gender);
  alert("Your name is " + name);
}