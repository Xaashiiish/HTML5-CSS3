let space1 = document.getElementById("form1");
let space2 = document.getElementById("form2");
let space3 = document.getElementById("form3");
let space4 = document.getElementById("form4");
const alert_fname = document.getElementById("alert-fname");
const alert_lname = document.getElementById("alert-lname");
const alert_email = document.getElementById("alert-email");
const alert_password = document.getElementById("alert-password");

function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert_fname.textContent = "First name cannot be empty";
        space1.removeAttribute("placeholder");
        space1.style.backgroundImage= "url(./images/icon-error.svg)";
        space1.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    var y = document.forms["myForm"]["lname"].value;
    if(y == ""){
        alert_lname.textContent = "Last name cannot be empty";
        space2.removeAttribute("placeholder");
        space2.style.backgroundImage= "url(./images/icon-error.svg)";
        space2.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    var z = document.forms["myForm"]["email"].value;
    if(z == ""){
        alert_email.textContent = "Looks like this is not an emal";
        space3.setAttribute("placeholder","email@example.com");
        space3.style.backgroundImage= "url(./images/icon-error.svg)";
        space3.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    
    var w = document.forms["myForm"]["password"].value;
    if(w == ""){
        alert_password.textContent = "Password cannot be empty";
        space4.removeAttribute("placeholder");
        space4.style.backgroundImage= "url(./images/icon-error.svg)";
        space4.style.border = "2px solid hsl(0, 100%, 74%)";
        return false;
    }
}

