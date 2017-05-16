//FOR PATIENT LOGIN


var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
    var usernamepr = document.getElementById("username-pr").value;
    var passwordpr = document.getElementById("password-pr").value;

    if ( usernamepr == "ppp" && passwordpr == "ppp"){
        alert ("Login successfully");
        window.location = "patients_portal.html"; //redirecting to other page
        return false;
    }
    else{
        attempt --;//Decrementing by one
        alert("You have left "+attempt+" attempt;");
        
        //Disabling fields after 3 attempts
        if( attempt == 0){
            document.getElementById("username-pr").disabled = true;
            document.getElementById("passwor-pr").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

