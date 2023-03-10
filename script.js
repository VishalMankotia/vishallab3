// Run function when DOM Content has loaded
document.addEventListener("DOMContentLoaded", init);

// Function to run when DOM Content has loaded
function init(event) {
    // Get registration form and keep in global scope
    regForm = document.forms["registration"];

    // Listen for form submit
    regForm["register"].onclick = validateForm;
}

// Function to validate form elements
function validateForm(event) {
    // Array to contain all error messages
    var errorMessages = Array();

    // If username is empty
    if (!regForm["username"].value) {
        errorMessages.push("* Please enter Username");
    }
   
    // If password1 is empty
    if (!regForm["password1"].value) {
        errorMessages.push("* Please enter Password1");
    }

    // // If password2 is empty
    // if (!regForm["password2"].value) {
    //     errorMessages.push("* Please enter Password2");
    // }

    // // If both passwords have values
    // if (regForm["password1"].value && regForm["password2"].value) {
    //     // If passwords don't match
    //     if (regForm["password1"].value != regForm["password2"].value) {
    //         errorMessages.push("* Passwords do not match");
    //     }
    // }
 // If checkbox  is empty
    if (!regForm["mobile"].value) {
        errorMessages.push("* Please Enter Mobile Number");
    }
    // If checkbox  is empty
    if (!regForm["myDate"].value) {
        errorMessages.push("* Please Enter Date");
    }

    // Find out if a gender has been selected
    var isChecked = false;
    for (var i = 0; i < regForm["gender"].length; i++) {
        if (regForm["gender"][i].checked) {
            isChecked = true; // Found a checked radio button!
            break; // No need to continue the search
        }
    }

    // If a gender selection was not found
    if (!isChecked) {
        errorMessages.push("* Please choose your gender");
    }

    // If selection has no value
    if (!regForm["continent"].value) {
        errorMessages.push("* Please select your location");
    }

    // If description is empty
    if (!regForm["description"].value) {
        errorMessages.push("* Please enter a description about you");
    }
    // If description is empty
    if (!regForm["file"].value) {
        errorMessages.push("* Upload a file");
    }

    // Show error messages
    displayErrors(errorMessages);

    // If there are errors
    if (errorMessages.length) {
        // Stop the form from submitting
        return false;
    }
}

function displayErrors(errors) {
    var errorBox = document.getElementById("errorMessages");

    // If there aren't any errors
    if (!errors.length) {
        errorBox.innerHTML = "";
        return false;
    }

    // Get reference to error box
    var errorBox = document.getElementById("errorMessages");

    // Prepare a container to hold the completed error message string
    var messageString = "<ul>";

    // Loop through each error to display
    for (var i = 0; i < errors.length; i++) {
        messageString += "<li>" + errors[i] + "</li>";
    }

    messageString += "</ul>";

    errorBox.innerHTML = messageString;
}