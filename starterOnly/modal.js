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

// Code added by David Mclean for open classrooms 2023

/*cette fonction réinitialise un formulaire nommé reserve à son état initial */
const resetForm = () => {
  const formReset = document.forms["reserve"];
  //reset the form inputs
  formReset.reset();
}





/*cette fonction est à l'écoute d'un événement click sur un élément nommé closeBtn, 
cache un élément nommé modalbg, vérifie si un formulaire avec ID 'reserve' est valide, 
soumet le formulaire s'il est valide, et appelle une fonction nommée resetForm. */
closeBtn.addEventListener('click', () => {
  // hide the modal
  modalbg.style.display = "none";
 // get the form element by ID
  let form = document.getElementById('reserve');
  // Reset the form inputs
  if(form.checkValidity()){
    // hide the form
    form.submit();
}
  resetForm();
});

// get the submit button element
/*cette fonction est à l'écoute d'un événement de clic sur un élément dont l'ID est "submitBtn", 
empêche le comportement par défaut de l'événement de clic et appelle une fonction nommée validate. */
let submitBtn = document.getElementById('submitBtn');
// create an event listener when the user clicks the button
submitBtn.addEventListener('click', (e) => {
  // prevent the form from submitting
  e.preventDefault();
  // call the validate function
  validate();
})



// Validate function 
/*cette fonction vérifie si un formulaire est valide en appelant plusieurs fonctions de validation
 et renvoie true si toutes les validations sont réussies et false dans le cas contraire. */
let validate = () => {
  // get the form 
  const form = document.forms['reserve'];
  // Create  An array that will contain all the validation functions
  let isValid = [firstControl(), lastControl(), emailControl(), birthControl(), quantityControl(), locationControl(), checkboxControl()];
// display the array in the console.
  console.log(isValid);
  
// loop through the  array and verfiy that the array values are all true.
  for (let i = 0; i < isValid.length; i++) {
      if (!isValid[i]) {

          return false;
      }
  }
// call call confirmation function
  formConfirmation();
  return true
};

// validation functions 

//first name input
/*cette fonction valide un élément d'entrée portant le nom "first" en vérifiant sa longueur et
 sa valeur et affiche des messages d'erreur sur un élément portant l'ID "firstNameData" */
let firstControl = () => {
  // get input value 
  let first = document.getElementsByName('first')[0].value;
  let firstNameData = document.querySelector('#firstNameData');
  // check conditions with if statement
 
  if (first.length < 2) {
    // set the error message 
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
// last name input
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
// email input
/*cette fonction valide un élément d'entrée portant le nom "email" en vérifiant 
si sa valeur est une adresse électronique valide à l'aide d'une expression régulière et
 affiche des messages d'erreur sur un élément portant l'ID "emailData */
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
// birthdate input 
/*cette fonction valide un élément d'entrée portant le nom "birthdate" en vérifiant si sa valeur est une chaîne vide 
et affiche des messages d'erreur sur un élément portant l'ID "birthData */
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
// quantity input 
/*cette fonction valide un élément d'entrée portant le nom "quantity" en vérifiant si sa valeur est un nombre,
une chaîne vide ou si elle se situe dans une plage spécifique, et
affiche des messages d'erreur sur un élément portant l'ID "quantityData" */
quantityControl = () => {
  // get the element
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

// radio inputs 
/*la fonction locationControl vérifie si des boutons radio portant le nom location sont cochés. 
Si aucune n'est cochée, elle affiche un message d'erreur demandant à l'utilisateur de choisir un lieu.
Si au moins une case est cochée, elle supprime le message d'erreur. La fonction renvoie true ou false 
selon qu'au moins une case d'option est cochée ou non */
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

// checkbox input
/* la fonction checkboxControl vérifie si une case à cocher portant l'identifiant checkbox1 est cochée. 
Si elle n'est pas cochée, elle affiche un message d'erreur demandant à l'utilisateur de vérifier qu'il accepte les conditions générales.
 Si la case est cochée, le message d'erreur disparaît. La fonction renvoie true ou false selon que la case est cochée ou non. */
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

// function that displays the confirmation message 
/* qui vérifie si un formulaire avec l'id reserve est valide en utilisant la méthode checkValidity.  */
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




