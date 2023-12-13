// Function for validating if password and repeated password matches
function validatePassword(){
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
// If password and repeated password do not match send alert
    if (password !== repeatPassword) {
        alert("Password do not match");
        return false;
    }
        return true;
}
// Alert when form successfully submitted
function formSubmitted(){
    alert("Form Submitted!")
}