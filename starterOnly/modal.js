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


/*
// prevent default
const reserve = document.forms["reserve"];
reserve.addEventListener('submit', (event)=>{
  event.preventDefault();
}); 

*/



 




