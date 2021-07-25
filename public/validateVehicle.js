// Declare variables to pick inputs from form
var numberplate = document.getElementById("numberplate");
var ColorVehicle = document.getElementById("colorvehicle");
var timeIn = document.getElementById("timeIn");
var dateIn = document.getElementById("dateIn");
var package = document.getElementById("package");
var washer = document.getElementById("washer");
var make = document.getElementById("make");



//for the error IDs
var numberplateError = document.getElementById("errorplate");
var ColorVehicleError = document.getElementById("errorvehicle");
var timeInError = document.getElementById("errortime");
var dateInError = document.getElementById("errordate");
var packageError = document.getElementById("errorpackage");
var washerError = document.getElementById("errorwasher");
var makeError = document.getElementById("errormake");

// validation of the numbeplate
var numberplatereg = /^([A-Z]{3}.*[\s\.]*[0-9]{3}[A-Z]{1})$/;

//function to help us validate the form
let validatevehicle = () => {
  if (!(numberplate.value.length == 8)) {
    numberplateError.innerHTML = " Number Plate Should be 8 Characters ";
    numberplate.style.border = "1px solid red";
    return false;
  } else if (
    numberplate.value.length >= 8 &&
    numberplate.value.match(numberplatereg)
  ) {
    numberplateError.innerHTML = "";
    numberplate.style.border = "1px solid green";
  } else if (!(numberplate.value.length <= 8 && numberplate.value.match(numberplatereg))
  ) {
    numberplateError.innerHTML = "Number Plate start with Capital letter ";
    numberplate.style.border = "1px solid red";
    return false;
  }

  //vehicle
  if (ColorVehicle.value == "") {
    ColorVehicle.style.border = "1px solid red";
    ColorVehicleError.innerHTML = "Please fill field";
    return false;
  } else {
    ColorVehicle.style.border = "1px solid green";
    ColorVehicleError.innerHTML = "";
  }
  //timeIn
  if (timeIn.value == "") {
    timeIn.style.border = "1px solid red";
    timeInError.innerHTML = "Please fill field";
    return false;
  } else {
    timeIn.style.border = "1px solid green";
    timeInError.innerHTML = "";
  }
  //Date In
  if (dateIn.value == "") {
    dateIn.style.border = "1px solid red";
    dateInError.innerHTML = "Please fill field";
    return false;
  } else {
    dateIn.style.border = "1px solid green";
    dateInError.innerHTML = "";
  }
  //package
  if (package.value == "") {
    package.style.border = "1px solid red";
    packageError.innerHTML = "Please fill field";
    return false;
  } else {
    package.style.border = "1px solid green";
    packageError.innerHTML = "";
  }
  //make
  if (make.value == "") {
    make.style.border = "1px solid red";
    makeError.innerHTML = "Please fill field";
    return false;
  } else {
    make.style.border = "1px solid green";
    makeError.innerHTML = "";
  }
  //washer
  if (washer.value == "") {
    washer.style.border = "1px solid red";
    washerError.innerHTML = "Please fill field";
    return false;
  } else {
    washer.style.border = "1px solid green";
    washerError.innerHTML = "";
  }
  return true;
};
