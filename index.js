$(document).ready(function() {
  
  $(".claimYourFreeTrialButton").click(function(event) {
    event.preventDefault();
    
    checkInputField("#firstName", "First Name");
    checkInputField("#lastName", "Last Name");
    checkInputField("#password", "Password");
    
    checkEmailField();
  });

  function checkInputField(inputId, fieldName) {
    var inputField = $(inputId);
    
    var inputValue = inputField.val();
    
    if (inputValue.trim() === "") {
      showErrorForField(inputField, fieldName + " cannot be empty");
    } 

    else {
      clearErrorForField(inputField);
    }
  }

  function checkEmailField() {
    var emailField = $("#emailAddress");
    var emailValue = emailField.val();

    if (emailValue.trim() === "") {
      showErrorForField(emailField, "Email Address cannot be empty");
    } 

    else if (!isValidEmail(emailValue)) {
      showErrorForField(emailField, "Looks like this is not an email");
    } 

    else {
      clearErrorForField(emailField);
    }
  }

  function showErrorForField(inputField, errorMessage) {
    var wrapper = inputField.parent();
    
    wrapper.addClass("error");
    
    wrapper.find("small").text(errorMessage).show();
    wrapper.find(".input-icon").show();
    inputField.css("border-color", "red");
    inputField.css("color", "red");
  }

  function clearErrorForField(inputField) {
    var wrapper = inputField.parent();
    wrapper.removeClass("error");
    wrapper.find("small").hide();
    wrapper.find(".input-icon").hide();
    inputField.css("border-color", "");
    inputField.css("color", "");
  }

  function isValidEmail(email) {
    return email.includes("@" && ".");
  }
});