function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg =  document.querySelector(".bground");
const closeBtn = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const formReset = document.forms["reserve"];
const resetForm = ()=>{
  //reset the form inputs
  formReset.reset();
}

// close modal form 
closeBtn.addEventListener('click', ()=>{
  modalbg.style.display = "none";
    // Reset the form inputs
    resetForm();
});



const reserve = document.forms["reserve"];
reserve.addEventListener('submit', (event)=>{
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

  //  valid boolean

  let isValid = true;

    // controllers 

    const firstController = first => {
      if ( first !== '') {
        return false;
      }
    };
  
    const lastController = last => {
      if (last !== '') {
        return false;
      }
    };
  
    const emailController = email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // check if input values  meets submission criteria 
  if (!firstController(firstValue)) {
    isValid = false;
    let firstNameData = document.querySelector('#firstNameData');
    firstNameData.setAttribute('data-error-visible', true);
    firstNameData.setAttribute('data-error', 'le prénom doit comporter au moins deux caractères');
  };

  if (!lastController(lastValue)) {
    isValid = false;
    let lastNameData = document.querySelector('#LastNameData');
    lastNameData.setAttribute('data-error-visible', true);
    lastNameData.setAttribute('data-error', 'le champ ne doit pas être vide');
  };

  if (!emailController(emailValue)) {
    isValid = false;
    let emailData = document.querySelector('#emailData');
    emailData.setAttribute('data-error-visible', true);
    emailData.setAttribute('data-error', 'utiliser un email valide');
  };



  if(!isValid){
    alert("form is not correct");

  }else{
    alert("form has been submitted");
  }

 return isValid

}



 









 




