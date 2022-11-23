import {inputValueInvalid, emailFormatInvalid, inputValueValid} from './validation.js'
const inputs = document.querySelectorAll('.inputs');
const inputEmail = inputs[2];
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    inputs.forEach((item,index)=>{
        if (item.value === '') {
            inputValueInvalid(inputs, index);
        }else if (inputEmail.value !== '' && !inputEmail.value.match(emailFormat)) {
            emailFormatInvalid(inputEmail);
        }else{
            inputValueValid(inputs, index);
        }
    })
})