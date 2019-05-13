/*I declare that my assignment is wholly my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructor and / or made available in this assignment for my use. I also declare that no part of this assignment has been distributed to other students.
                Name: Anmol Singh Sandhu
                Dated: 6 December 2018 
                */
                var errors = document.querySelector("#error");
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digit = "1234567890";

function formValidation()
{
    clearErr();
    var password = document.getElementById('pass').Value.trim(); 
    var username = document.getElementById('user').Value.trim();
    var eStatus = document.getElementById('estatus').Value.trim();
    var eLevel = document.getElementById('elevel').Value.trim();
    var age = document.getElementById('age').Value.trim();
    var email = document.getElementById('email').Value.trim();

    if (
        validatepass(password)      &&
        validateuser(username))     
    
        {
            return true;
        }

            return false;
}

function validatepass(password)
{
    var errors = document.querySelector("#errors");
    /* LENGHT OF 8*/
    if(password.length != 6)
    {
        errors.innerHTML += "<p>* Please enter 6 characters for password.</p>";
        document.form.password.focus();
        return false;
    }
    /* 1 UPPERCASE*/
    var uCase = false;
    for(var i = 0; i<password.length; ++i )
    {
        var letter = password.substr(i, 1);
        if(!uCase && alphaString.indexOf(letter) < 0)
        {
            if(i + 1 == password.length)
            {
                errors.innerHTML += "<p>* Please enter at least 1 uppercase letter for password</p>";
                document.signup.password.focus();
                return false;
            }
        }
        else uCase = true;
    }
    /* Start with a character*/
    if (!(characters.indexOf(password.substr(0, 1)) >= 0)) {
        errors.innerHTML += "<p>* Please start Password with a charecter A-Z</p>";
        document.signup.password.focus();
        return false;
    }
    /* DIGIT FOUND*/
    var dFound = false;
    for (var i = 0; i < password.length; i++) {
        var letter = password.substr(i, 1);
        if (!dFound && digit.indexOf(letter) < 0) {
            if (i + 1 == password.length) {
                errors.innerHTML += "<p>* Please enter at least 1 digit for password</p>";
                document.form.password.focus();
                return false;
            }
        } else {
            dFound = true;
        }

        if (password != document.form.cpassword.value.trim()) {
            errors.innerHTML += "<p>* Passwords are not mach! Please retype your password</p>";
            document.signup.password.focus();
            return false;
        }    
}

function validateuser(username)
{
    var errors = document.querySelector("#errors");
    if (username.length < 6) {
        errors.innerHTML += "<p>* Please enter at least 6 charecters for Username.</p>";
        document.form.username.focus();
        return false;
    }
    var cLetter = 0;
    var letter = username.substr(0, 1);
    if (!(characters.indexOf(letter.toLowerCase()) >= 0)) {
        errors.innerHTML += "<p>* Please start the Username with a letter.</p>";
        document.form.username.focus();
        return false;
    }
}

function clearErr() {
    
    document.querySelector("#errors").innerHTML = " ";
} 