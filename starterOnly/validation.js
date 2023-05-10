

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

    alert('the form is valid');
    form.submit();
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
    } else {
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
    let checkboxData = document.querySelector('#locationData');
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

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})