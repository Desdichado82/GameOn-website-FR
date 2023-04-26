// Ajouter l'attribut novalidate lors du chargement du JS
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}


// Valider le champ
var hasError = function (field) {

   // Ne pas valider les soumissions, les boutons, les entrées de fichier et de réinitialisation, et les champs désactivés.
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    // Obtenir la validité
    var validity = field.validity;

// Si elle est valide, elle renvoie null
    if (validity.valid) return;

// Si le champ est obligatoire et vide
    if (validity.valueMissing) return 'Veuillez remplir ce champ.';

// Si ce n'est pas le bon type
    if (validity.typeMismatch) {

        // Email
        if (field.type === 'email') return 'Veuillez saisir une adresse électronique.';

    }

 // Si trop court
    if (validity.tooShort) return 'Veuillez allonger ce texte à ' + field.getAttribute('minLength') + ' caractères ou plus. Vous utilisez actuellement ' + field.value.length + ' caractères.';

    // Si trop long
    if (validity.tooLong) return 'Veuillez raccourcir ce texte au maximum ' + field.getAttribute('maxLength') + ' caractères. Vous utilisez actuellement ' + field.value.length + ' caractères.';

 // Si le nombre saisi n'est pas un nombre
    if (validity.badInput) return 'Veuillez saisir un numéro.';

// Si une valeur numérique ne correspond pas à l'intervalle d'étape
    if (validity.stepMismatch) return 'Veuillez sélectionner une valeur valide.';

   // Si un champ numérique dépasse la valeur maximale
    if (validity.rangeOverflow) return 'Veuillez sélectionner une valeur ne dépassant pas ' + field.getAttribute('max') + '.';

    // Si un champ numérique est inférieur à la valeur minimale
    if (validity.rangeUnderflow) return 'Veuillez choisir une valeur qui nest pas inférieure à' + field.getAttribute('min') + '.';
  
    // Si le motif ne correspond pas
    if (validity.patternMismatch) {

        // Si des informations sur le motif sont incluses, renvoyer une erreur personnalisée
        if (field.hasAttribute('title')) return field.getAttribute('title');

        // Sinon, une erreur générique
        return 'Veuillez respecter le format demandé.';

    }

    // En cas d'échec, renvoyer une erreur générique.
    return 'La valeur que vous avez saisie pour ce champ nest pas valide.';

};


