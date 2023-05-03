
function validate() {

  // Get all the inputs from the form
  let inputs = document.forms["reserve"].querySelectorAll("[data-validate]");

  // Initialize a flag to indicate if the form is valid
  let isValid = true;

  // Helper function to remove an error message from a container element
function removeError(container) {
    // Find the span element with the error class
    let span = container.querySelector(".error");
  
    // If the span element exists, remove it from the container element
    if (span) {
      container.removeChild(span);
    }
  }
  // Helper function to validate an email address using a regular expression
  function validateEmail(email) {
      // Define a regular expression for email format
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
      // Test the email against the regular expression and return the result
      return emailRegex.test(email);
    }
  
    function validateText(first){
      let textRegEx = /[a-zA-Z]{2,6}$/
      return textRegEx.test(first);
    }

    // Helper function to show an error message in a container element
function showError(container, message) {
  // Create a span element to hold the message
  let span = document.createElement("span");
  span.className = "error";
  span.textContent = message;

  // Append the span element to the container element
  container.appendChild(span);
}

  // Loop through each input
  for (let input of inputs) {
    // Get the input container from the parent element
    let container = input.parentElement;

    // Remove any existing error messages
    removeError(container);

    // Get the validation type from the data-validate attribute
    let validate = input.dataset.validate;

    // Switch on the validation type
    switch (validate) {
      case "text":
        // The input is required
        if (input.value.trim() === "") {
          // The input is empty
          showError(container, input.dataset.error);
          isValid = false;
        }else if(!validateText(input.value)){
            showError(container, "le prénom doit comporter au moins deux caractères");
            isValid = false;
        }
        break;
        case "text":
            // The input is required
            if (input.value.trim() === ""|| input.value.trim !==/[a-zA-Z]{2,6}$/ ) {
              // The input is empty
              showError(container, input.dataset.error);
              isValid = false;
            }
            break;
      case "email":
        // The input is an email address
        if (input.value.trim() === "") {
          // The input is empty
          showError(container, input.dataset.error);
          isValid = false;
        } else if (!validateEmail(input.value)) {
          // The input is not a valid email address
          showError(container, "Veuillez saisir une adresse électronique valide");
          isValid = false;
        }
        break;
        case "date":
            // The input is required
            if (input.value.trim() === "") {
              // The input is empty
              showError(container, input.dataset.error, true);
              isValid = false;
            }
            break;
      case "number":
        // The input is a number
        if (input.value.trim() === "") {
          // The input is empty
          showError(container, input.dataset.error, true);
          isValid = false;
        } else if (isNaN(input.value) || input.value < 0) {
          // The input is not a positive number
          showError(container, "Veuillez saisir un numéro valide");
          isValid = false;
        }
        break;
      case "radio":
        // The input is a radio button
        let name = input.name;
        let radios = form.querySelectorAll(`[name="${name}"]`);
        let checked = false;
        for (let radio of radios) {
          if (radio.checked) {
            checked = true;
            break;
          }
        }
        if (!checked) {
          // No radio button is checked
          showError(container, input.dataset.error,true);
          isValid = false;
        }
        break;
      case "checkbox":
        // The input is a checkbox
        let id = input.id;
        let checkbox = form.querySelector(`[id="${id}"]`);
        if (!checkbox.checked) {
          // The checkbox is not checked
          showError(container, "Veuillez cocher cette option");
          isValid = false;
        }
        break;
      default:
        // Unknown validation type
        console.error("Type de validation inconnu: " + validate);
    }
  }

  // If the form is valid, display a success message
  if (isValid) {
    alert("Le formulaire a été soumis avec succès");
  }else{
    alert("form is not valid");
  }

  // Return the validity flag
  return isValid;
}


