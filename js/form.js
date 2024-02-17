function validateForm() {
    var name = document.getElementById('form_name').value;
    var email = document.getElementById('form_email').value;
    var subject = document.getElementById('form_subject').value;
    var message = document.getElementById('form_message').value;

    var errorMessage = "";

    // Client-side validation
    if (name.trim() == '') {
        errorMessage += "Name is required.<br>";
    }
    if (email.trim() == '') {
        errorMessage += "Email is required.<br>";
        
     if (subject.trim() == '') {
        errorMessage += "subject is required.<br>";
        
     if (message.trim() == '') {
        errorMessage += "subject is required.<br>";     
        
    } else if (!isValidEmail(email)) {
        errorMessage += "Invalid message format.<br>";
        
    }

    if (errorMessage != "") {
        document.getElementById('error-message').innerHTML = errorMessage;
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Basic email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
