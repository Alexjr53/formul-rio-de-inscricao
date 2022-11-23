const errorMessage = document.querySelectorAll('.error-message');
const emailErrorMessage = errorMessage[2]

function inputValueInvalid(inputs, index){
    const labelValue = inputs[index].placeholder
    inputs[index].classList.add('error-alert')
    inputs[index].classList.add('placeholder-none')
    errorMessage[index].style.display = 'block'
    errorMessage[index].innerHTML = `${labelValue}  cannot be empty`
}

function emailFormatInvalid (inputEmail){
    inputEmail.classList.add('error-alert')
    emailErrorMessage.style.display = 'block'
    emailErrorMessage.innerHTML = 'Looks like this is not an email'
}

function inputValueValid(inputs, index){
    inputs[index].classList.remove('error-alert')
    errorMessage[index].style.display = 'none'
}

export {inputValueInvalid, emailFormatInvalid, inputValueValid}