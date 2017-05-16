//FOR DOCTOR LOGIN

var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
    var usernamedr = document.getElementById("username-dr").value;
    var passworddr = document.getElementById("password-dr").value;

    if ( usernamedr == "ddd" && passworddr == "ddd"){
        alert ("Login successfully");
        window.location = "doctor_portal.html"; //redirecting to other page
        return false;
    }
    else{
        attempt --;//Decrementing by one
        alert("You have left "+attempt+" attempt;");
        
        //Disabling fields after 3 attempts
        if( attempt == 0){
            document.getElementById("username-dr").disabled = true;
            document.getElementById("password-dr").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

