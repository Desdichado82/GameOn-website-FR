// Get the form element
const form = document.forms["reserve"];

// Get the input elements
const { first, last, email, birthdate, location } = form;

// Get the span element for displaying the validation message
const validMessage = document.getElementById("validMessage");

// Define a function to validate the form inputs
const validate = (event) => {
  // Prevent the default behavior of the submit input
  event.preventDefault();

  // Initialize a variable to store the validation status
  let isValid = true;

  // Loop through the input elements
  for (let input of form.elements) {
    // Get the parent div element of the input
    const div = input.parentElement;

    // Check if the input is required and has a value
    if (input.required && input.value) {
      // Set the data-error-visible attribute of the div to false
      div.setAttribute("data-error-visible", "false");
    } else if (input.required && !input.value) {
      // Set the data-error-visible attribute of the div to true
      div.setAttribute("data-error-visible", "true");

      // Set the isValid variable to false
      isValid = false;
    }
  }

  // Check if the location radio buttons are checked
  let locationChecked = false;

  // Loop through the location radio buttons
  for (let radio of location) {
    // Get the parent div element of the radio button
    const div2 = radio.parentElement;

    // Check if the radio button is checked
    if (radio.checked) {
      // Set the locationChecked variable to true
      locationChecked = true;

      // Break out of the loop
      break;
    }
  }

  // Check if the locationChecked variable is false
  if (!locationChecked) {
    // Set the data-error-visible attribute of the div to true
    div2.setAttribute("data-error-visible", "true");

    // Set the isValid variable to false
    isValid = false;
  } else {
    // Set the data-error-visible attribute of the div to false
    div2.setAttribute("data-error-visible", "false");
  }

  // Check if the isValid variable is true
  if (isValid) {
    // Display a success message
    validMessage.innerHTML =
      "Your reservation has been submitted successfully. Thank you!";
    validMessage.style.color = "green";

    // Submit the form
    form.submit();
  } else {
    // Display an error message
    validMessage.innerHTML =
      "Please fill in all the required fields correctly.";
    validMessage.style.color = "red";
  }

  // Return the isValid variable as the validation result
  return isValid;
};

// Get the first checkbox element
const checkbox1 = form["checkbox1"];

// Add an event listener to the checkbox
checkbox1.addEventListener("change", () => {
  // Get the parent div element of the checkbox
  const div3 = checkbox1.parentElement;

  // Check if the checkbox is checked
  if (checkbox1.checked) {
    // Set the data-error-visible attribute of the div to false
    div3.setAttribute("data-error-visible", "false");
  } else {
    // Set the data-error-visible attribute of the div to true
    div3.setAttribute("data-error-visible", "true");
  }
});