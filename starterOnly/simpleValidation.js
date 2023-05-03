function validate(){

    // get inputs 

    let first = document.getElementsByName('first');
    let container = document.getElementsByName('');

    let isValid = false;


    if(first.value === "" || first.value !== /[a-zA-Z]{2,6}$/){
            alert("please enter a firstname");

    }else{
        isValid = true;
    }

    return isValid;
}