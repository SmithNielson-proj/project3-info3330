const phoneRegex = /^\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/;
const emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
const zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form= null;
let successMsg= null;

function initValidation(formId, successId) {
    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);

    let inputs = document.querySelectorAll("input");
    for (input of inputs) {

        input.addEventListener("change", inputChanged );
    }
    form.addEventListener("submit", submitForm );

}

function inputChanged(event) {
    let el = event.currentTarget;

    el.classList.add('was-validated');
    validateForm();
}


function submitForm(event) {
    console.log("in submit");
    let form= event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    validateForm();

    if (!form.checkValidity()){
        let inputs = form.querySelectorAll('input');
        inputs.forEach(input => input.classList.add('was-validated'));
    }else{
       form.style.display = 'none';
       successMsg.style.display = 'block';
    }
}


function validateForm() {

    checkRequired("first-name", "First Name is Required");
    checkRequired("last-name", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");

    if(checkRequired("state", "State is Required")){
        validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }

    if (checkRequired("email", "Email Address is required")) {
        checkFormat("email", "email format is bad", emailRegex)
    }
    if (checkRequired("zip", "Zip Code is Required")) {
        checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex)
    }
    if (checkRequired("phone", "Phone is required")) {
        checkFormat("phone", "phone format is bad", phoneRegex)
    }
    checkRequired("newspaper", "you must select at least one!");

}


function validateState(id, msg) {
    let el = document.getElementById(id);
    let value = el.value.toUpperCase();
    let valid = stateAbbreviations.includes(value);

    setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regex) {
    let el = document.getElementById(id);
    let valid = regex.test(el.value);
    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, message) {
    let el = document.getElementById(id);
    let valid = false;
    let type = el.type;

    switch (type) {
        case 'text':
        case 'password':
            valid = el.value.trim() !== '';
            break;

        case 'checkbox':
        case 'radio':
            let name = el.name;
            let group = document.querySelectorAll(`input[name="${name}"]`);
            valid = Array.from(group).some(e => e.checked);
            break;
    }

    setElementValidity(id, valid, message);
    return valid;
}

function setElementValidity(id, valid, message) {
    const el = document.getElementById(id);
    const errorDiv = el?.parentElement?.querySelector('.errorMsg');

    if (valid) {
        el.setCustomValidity('');
        if (errorDiv) errorDiv.textContent = '';
    } else {
        el.setCustomValidity(message);
        if (errorDiv) errorDiv.textContent = message;
    }
}