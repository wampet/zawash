// Declare variables to pick inputs from form
var NumberPlate = document.getElementById("numberplate");
var ColorVehicle = document.getElementById("colorvehicle");
var TimeIn = document.getElementById("timeIn");
var DateIn = document.getElementById("dateIn");
var Package = document.getElementById("package");
var Washer = document.getElementById("washer");
var Make = document.getElementById("make");
var form = document.getElementById("regform");
var submit = document.getElementById("submit");
//for the error IDs
var NumberPlateError = document.getElementById("errorplate");
var ColorVehicleError = document.getElementById("errorvehicle");
var TimeInError = document.getElementById("errortime");
var DateInError = document.getElementById("errordate");
var PackageError = document.getElementById("errorpackage");
var WasherError = document.getElementById("errorwasher");
var MakeError = document.getElementById("errormake");

// validation of the numbeplate
var NumberPlatereg = /^([A-Z]{3}.*[\s\.]*[0-9]{3}[A-Z]{1})$/;

//function to help us validate the form
let validatevehicle = () => {
  if (!(NumberPlate.value.length == 8)) {
    NumberPlateError.innerHTML = " Number Plate Should be 8 Characters ";
    NumberPlate.style.border = "1px solid red";
    return false;
  } else if (
    NumberPlate.value.length >= 8 &&
    NumberPlate.value.match(NumberPlatereg)
  ) {
    NumberPlateError.innerHTML = "";
    NumberPlate.style.border = "1px solid green";
  } else if (!(NumberPlate.value.length <= 8 && NumberPlate.value.match(NumberPlatereg))
  ) {
    NumberPlateError.innerHTML = "Number Plate start with Capital letter ";
    NumberPlate.style.border = "1px solid red";
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
  if (TimeIn.value == "") {
    TimeIn.style.border = "1px solid red";
    TimeInError.innerHTML = "Please fill field";
    return false;
  } else {
    TimeIn.style.border = "1px solid green";
    TimeInError.innerHTML = "";
  }
  //Date In
  if (DateIn.value == "") {
    DateIn.style.border = "1px solid red";
    DateInError.innerHTML = "Please fill field";
    return false;
  } else {
    DateIn.style.border = "1px solid green";
    DateInError.innerHTML = "";
  }
  //Package
  if (Package.value == "") {
    Package.style.border = "1px solid red";
    PackageError.innerHTML = "Please fill field";
    return false;
  } else {
    Package.style.border = "1px solid green";
    PackageError.innerHTML = "";
  }
  //Make
  if (Make.value == "") {
    Make.style.border = "1px solid red";
    MakeError.innerHTML = "Please fill field";
    return false;
  } else {
    Make.style.border = "1px solid green";
    MakeError.innerHTML = "";
  }
  //Washer
  if (Washer.value == "") {
    Washer.style.border = "1px solid red";
    WasherError.innerHTML = "Please fill field";
    return false;
  } else {
    Washer.style.border = "1px solid green";
    WasherError.innerHTML = "";
  }
  return true;
};
