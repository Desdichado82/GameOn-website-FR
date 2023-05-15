function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//// projet Code

const formReset = document.forms["reserve"];
const resetForm = () => {
  //reset the form inputs
  formReset.reset();
}




// close modal form 
closeBtn.addEventListener('click', () => {
  modalbg.style.display = "none";
  let form = document.getElementById('reserve');
  // Reset the form inputs
  if(form.checkValidity()){
    // hide the form
    form.submit();
}
  resetForm();
});

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validate();
})




let validate = () => {
  const form = document.forms['reserve'];
  // 
  let isValid = [firstControl(), lastControl(), emailControl(), birthControl(), quantityControl(), locationControl(), checkboxControl()];

  console.log(isValid);
  // verfiy that the array values are all true.

  for (let i = 0; i < isValid.length; i++) {
      if (!isValid[i]) {

          return false;
      }
  }

  formConfirmation();
  return true
};

// validation functions 

let firstControl = () => {
  // get input value 
  let first = document.getElementsByName('first')[0].value;
  let firstNameData = document.querySelector('#firstNameData');
  // check conditions with if statement

  if (first.length < 2) {
      firstNameData.setAttribute('data-error-visible', true);
      firstNameData.setAttribute('data-error', 'le prénom doit comporter au moins deux caractères');
      return false;
  } else if (first.value == '') {
      firstNameData.setAttribute('data-error-visible', true);
      firstNameData.setAttribute('data-error', 'le champ ne doit pas être vide');
      return false;
  } else {
      firstNameData.setAttribute('data-error-visible', false);
      return true;
  }
}

let lastControl = () => {
  // get input value 
  let last = document.getElementsByName('last')[0].value;
  let lastNameData = document.querySelector('#lastNameData');
  // check conditions with if statement
  if (last == '') {
      lastNameData.setAttribute('data-error-visible', true);
      lastNameData.setAttribute('data-error', 'le champ ne doit pas être vide');
      return false;
  }
  else {
      lastNameData.setAttribute('data-error-visible', false);
      return true;
  }
}

let emailControl = () => {
  // get input value 
  let email = document.getElementsByName('email')[0].value;
  let emailData = document.querySelector('#emailData');
  // test email value with regular expression for email
  const testEmail = () => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  // evalue  true or false the result

  if (!testEmail()) {
      emailData.setAttribute('data-error-visible', true);
      emailData.setAttribute('data-error', 'utiliser un email valide');
      return false;
  } else {
      emailData.setAttribute('data-error-visible', false);
      return true;
  }
}

let birthControl = () => {
  let birthdate = document.getElementsByName('birthdate')[0].value;
  let birthData = document.querySelector('#birthData');
  if (birthdate === '') {
      birthData.setAttribute('data-error-visible', true);
      birthData.setAttribute('data-error', 'saisissez votre date de naissance');
      return false;

  } else {
      //clear message error
      birthData.setAttribute('data-error-visible', false);
      return true;
  }

}

quantityControl = () => {
  let quantity = document.getElementsByName('quantity')[0].value;
  let quantityData = document.querySelector('#quantityData');
  if (isNaN(quantity)) {
      quantityData.setAttribute('data-error-visible', true);
      quantityData.setAttribute('data-error', 'sélectionner un certain nombre');
      return false;
  } else if (quantity === '') {
      // show errors 
      quantityData.setAttribute('data-error-visible', true);
      quantityData.setAttribute('data-error', 'sélectionner un certain nombre');
      return false;
  } else if(quantity < 1 || quantity > 99){
      // show errors 
      quantityData.setAttribute('data-error-visible', true);
      quantityData.setAttribute('data-error', 'sélectionner un certain nombre entre 1 - 99');
      return false;
  }else {
      // hide error message 
      quantityData.setAttribute('data-error-visible', false);
      return true;
  }
}

let locationControl = () => {
  let location = document.getElementsByName('location');
  let locationData = document.querySelector('#locationData');
  var isChecked = false;

  for (var i = 0; i < location.length; i++) {
      if (location[i].checked) {
          isChecked = true;
          break;
      }
  }

  if (!isChecked) {
      locationData.setAttribute('data-error-visible', true);
      locationData.setAttribute('data-error', 'veuillez choisir un lieu');
      return false;
  } else {
      //remove error message 
      locationData.setAttribute('data-error-visible', false);
      return true;
  }
}



let checkboxControl = () => {
  let checkbox = document.getElementById('checkbox1');
  let checkboxData = document.querySelector('#checkboxData');
  if (!checkbox.checked) {
      checkboxData.setAttribute('data-error-visible', true);
      checkboxData.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
      return false;
  } else {
      //remove error message 
      checkboxData.setAttribute('data-error-visible', false);
      return true;
  }
}

function formConfirmation(){
  let form = document.getElementById('reserve');
  let modal = document.getElementsByClassName('modal-body')[0];

  // 
  if(form.checkValidity()){
      // hide the form
      form.style.display ="none";
  }

  // display the confirmation message
  let confirmation = document.createElement("p");
 
  confirmation.innerText = "Merci Votre réservation a été reçue.";
 
  modal.appendChild(confirmation);
  
  modal.style.display = "block";
}




