const reserve = document.forms["reserve"];
reserve.addEventListener('submit', (event) => {
  event.preventDefault();
});

function validate() {

  // get the attributes 
  const reserve = document.getElementsByName('reserve');
  const first = document.getElementsByName('first');
  const last = document.getElementsByName('last');
  const email = document.getElementsByName('email');
  const birthdate = document.getElementsByName('birthdate');
  const quantity = document.getElementsByName('quantity');
  const location = document.getElementsByName('location');
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');




  // get the values
  const firstValue = first.value;
  const lastValue = last.value;
  const emailValue = email.value;
  const birthdateValue = birthdate.value;
  const quantityValue = quantity.value;

  // controllers 

  const firstController = () => {
    if (firstValue.length < 2) {
      return false;
    }
  };

  const lastController = () => {
    if (lastValue !== '') {
      return false;
    }
  };

  const emailController = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // check if input values  meets submission criteria 
  if (!firstController(firstValue)) {

    let firstNameData = document.querySelector('#firstNameData');
    firstNameData.setAttribute('data-error-visible', true);
    firstNameData.setAttribute('data-error', 'le prénom doit comporter au moins deux caractères');
  } else {
    isValid = true;
    firstNameData.setAttribute('data-error-visible', false);

  };

  if (!lastController(lastValue)) {
    isValid = false;
    let lastNameData = document.querySelector('#LastNameData');
    lastNameData.setAttribute('data-error-visible', true);
    lastNameData.setAttribute('data-error', 'le champ ne doit pas être vide');
  } else {
    isValid = true;
    lastNameData.setAttribute('data-error-visible', false);
  };

  if (!emailController(emailValue)) {
    isValid = false;
    let emailData = document.querySelector('#emailData');
    emailData.setAttribute('data-error-visible', true);
    emailData.setAttribute('data-error', 'utiliser un email valide');
  } else {
    isValid = true;
    emailData.setAttribute('data-error-visible', false);
  };






}


















