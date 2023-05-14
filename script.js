var password1 = document.getElementById("password");
var confirm_password1 = document.getElementById("confirm_password");
var pass = document.getElementById("pass");

confirm_password.onkeyup = function() {
    if (password1.value === confirm_password1.value) {
        password1.classList.remove("invalid");
        password1.classList.add("valid");
        confirm_password1.classList.remove("invalid");
        confirm_password1.classList.add("valid");
        pass.innerText = "";
    } else {
        password1.classList.remove("valid");
        password1.classList.add("invalid");
        confirm_password1.classList.remove("valid");
        confirm_password1.classList.add("invalid");
        pass.innerText = "* Passwords do not match";
    }
}
