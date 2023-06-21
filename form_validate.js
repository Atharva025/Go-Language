function validateForm() {
    var email = document.getElementById("emailId");
    var password = document.getElementById("pass");
    var name = document.getElementById("check_login_name");

    if (validEmail(email, "Please Enter a Valid Email")) {
        if (validPass(password, "Please Enter a Valid Password")) {
            if (validName(name, "Please Enter a Valid Name")) {
                return true;
            }
        }
    }
    return false;
}


function validEmail(element, helper_message) {
    var emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (element.value === emailVal) {
        return true;
    }
    else {
        alert(helper_message);
        return false;
    }
}

function validPass(element, helper_message) {
    var passVal = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;

    if (element.value === passVal) {
        return true;
    }
    else {
        alert(helper_message);
        return false;
    }
}

function validName(element, helper_message) {
    var nameVal = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

    if (element.value === nameVal) {
        return true;
    }
    else {
        alert(helper_message);
        return false;
    }
}