function CalAge() {
    var Birth = document.getElementById("dob");
    var age_New = document.getElementById("age");

    var today = new Date();
    var birthDate = new Date(Birth.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    age_New.value = age;
}

function CheckMax() {
    var fname = document.getElementById("Fname");
    var lname = document.getElementById("Lname");
    var error = document.getElementById("error");
    if (fname.value.length > 30 || lname.value.length > 30) {
        error.innerHTML = "frist name and last name should be less than 30 characters";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

function CheckUser() {
    var error = document.getElementById("error");
    var username = document.getElementById("user");
    val = username.value;
    if (!/^[a-z]+$/.test(val) || val.length > 10) {
        error.innerHTML = "User name should be only lowercase letters and less than 10 characters";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

function CheckPassword() {
    var error = document.getElementById("error");
    var password = document.getElementById("password");
    var confirm = document.getElementById("Cpassword");
    if (password.value !=confirm.value ) {
        error.innerHTML = "Password not match";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}


function PwValidation () {
    var error = document.getElementById("error");
    var password = document.getElementById("password");
    var value = password.value;
    if (value.length > 15 || value.length < 6 || !value.match(/[0-9]/g)) {
        error.innerHTML ="Password should be between 6-15 characters and at least one number";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

function CheckEmail() {
    var error = document.getElementById("error");
    var email = document.getElementById("email").value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var stat = re.test(String(email).toLowerCase());
    if (!stat) {
        error.innerHTML = "Email not valid";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}


function Checkbox() {
    var error = document.getElementById("error");
    var check = document.getElementById("check");
    var button = document.getElementById("submit");
    console.log(check.checked);
    if (!check.checked) {
        error.innerHTML = "Please agree with Conditions";
        error.classList.remove("hide");
        error.classList.add("error");
        button.disabled = true;
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        button.disabled = false;
        return true;
    }
}
 

function validation() {
    if (!CheckMax() || !CheckUser() || !CheckPassword() || ! PwValidation() || ! CheckEmail() || !Checkbox() ) {
        return false;
    } else {
        return true;
    }
}
