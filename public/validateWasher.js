
// Declare variables to pick inputs from form
var fullName = document.getElementById('fullName');
var dob = document.getElementById('dob');
var address = document.getElementById('address');
var zawashId = document.getElementById('zawashId');
var gender = document.getElementById('gender');
var tel = document.getElementById('tel');
var nationalId = document.getElementById('nationalId');



//for the Error IDs
var fullNameError = document.getElementById('fullNameError');
var dobError  = document.getElementById('dobError');
var addressError  = document.getElementById('addressError');
var zawashIdError  = document.getElementById('zawashIdError');
var genderError  = document.getElementById('genderError');
var telError  = document.getElementById('telError');
var nationalIdError  = document.getElementById('nationalIdError');


// // For the regular expressions to be used 
var nameReg = /^[[A-Z]([a-z])|[A-Z]([a-z])]$/;
var zawashIdReg  = /^Zwash([0-9]{3})$/;
var nationalIdReg  = /^[A-Z]{3}[0-9A-Z]{8}$/; 




//then we create a function that will be using the above variables to validate

let validatewasher =() => {   
    // This is for fullName validation
    if (fullName.value.length < 8) {
    fullNameError.innerHTML = ' Name Should be atleast 8 Characters ';
    fullName.style.border = "1px solid red"
    return false;
    } else if (fullName.value.match(nameReg)) {
        fullNameError.innerHTML = '';
        fullName.style.border = "1px solid green"
    } else if (!(fullName.value.length<= 8 && fullName.value.match(nameReg))) {
        fullNameError.innerHTML = 'Name start with Capital letter ';
        fullName.style.border = "1px solid red"
        return false;
    }                                
   
    //Date of birth validation
    if(dob.value==""  ){
        dob.style.border = "1px solid red"
        dobError.innerHTML ="Please fill field"
        return false;
        } else {
        dob.style.border = "1px solid green"
        dobError.innerHTML =""    
            }   

    //This is for the address validation
    if(address.value == ''){
        address.style.border = '1px solid red';
        addressError.innerHTML = 'Please fill field'
        return false;
        } else{
        address.style.border = '1px solid green';
        addressError.innerHTML = '';
        }
        
                            
    //This is for the Zwash ID validation
        if (!(zawashId.value.length ==8 )) {
            zawashIdError.innerHTML = ' Zwash ID Should have 8 Characters ';
            zawashId.style.border = "1px solid red"
        return false;
        } else if ((zawashId.value.length== 8) && (zawashId.value.match(zawashIdReg))) {
            zawashIdError.innerHTML = '';
            zawashId.style.border = "1px solid green"
        } else if (!(zawashId.value.match(zawashIdReg))) {
            zawashIdError.innerHTML = 'Starts with Zwash followed by 3 numbers';
            zawashId.style.border = "1px solid red"
            return false;
        } 

    //GENDER
    if(gender.value== ''  ){
        gender.style.border = "1px solid red"
        genderError.innerHTML ="Please fill field"
    return false;
    } 
    else {
        gender.style.border = "1px solid green"
        genderError.innerHTML ='' 
        
            } 

    //telephone
    if(tel.value==""  ){
        tel.style.border = "1px solid red"
        telError.innerHTML ="Please fill field"
    return false;
    } 
    else {
        tel.style.border = "1px solid green"
        telError.innerHTML =""    
            }   
   

    //National ID
    if (!(nationalId.value.length==11)) {
        nationalIdError.innerHTML = ' National ID have 11 Characters';
        nationalId.style.border = "1px solid red"
       return false;
    } else if (nationalId.value.length == 11 && nationalId.value.match(nationalIdReg)) {
        nationalIdError.innerHTML = '';
        nationalId.style.border = "1px solid green"
    } else if (!(nationalId.value.length ==11 && nationalId.value.match(nationalIdReg))) {
        nationalIdError.innerHTML = 'Starts with 3 Capital letters then 8 other charcters ';
        nationalId.style.border = "1px solid red"
        return false;
    }

return true;
}



