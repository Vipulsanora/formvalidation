const form = document.getElementById('form');
const username = document.getElementById('username');
const last = document.getElementById('last');
const inputEmail4 = document.getElementById('inputEmail4');
const inputPassword4 = document.getElementById('inputPassword4');
const inputAddress = document.getElementById('inputAddress');
const country = document.getElementById('country');
const state = document.getElementById('state');

form.addEventListener('submit', e =>{
    e.preventDefault();



    validateInputs();
});

const setError = (element, message) =>{
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector('.error');


   errorDisplay.innerText = message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success')
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
   inputControl.classList.remove('error');
};

const isValidEmail = inputEmail4 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputEmail4).toLowerCase());
}





const validateInputs = () =>{
 const usernameValue = username.value.trim();
 const lastValue = last.value.trim();
 const inputEmail4Value = inputEmail4.value.trim();
 const inputPassword4Value = inputPassword4.value.trim();
 const inputAddressValue = inputAddress.value.trim();
 const countryValue = country.value.trim();
 const stateValue = state.value.trim();


if(usernameValue === ''){

 setError(username, 'Firstname is required');
}else{
       setSuccess(username);
}

if(lastValue === ''){

    setError(last, 'Lastname is required');
   }else{
          setSuccess(last);
   }

   if(inputEmail4Value === '') {
    setError(inputEmail4, 'Email is required');
} else if (!isValidEmail(inputEmail4Value)) {
    setError(inputEmail4, 'Provide a valid email address');
} else {
    setSuccess(inputEmail4);
}

if(inputPassword4Value === '') {
    setError(inputPassword4, 'Password is required');
} else if (inputPassword4Value.length < 8 ) {
    setError(inputPassword4, 'Password must be at least 8 character.')
} else {
    setSuccess(inputPassword4);
}

if(inputAddressValue === ''){

    setError(inputAddress, 'Address is required');
   }else{
          setSuccess(inputAddress);
   }

   if(countryValue === ''){

    setError(country, 'Country is required');
   }else{
          setSuccess(country);
   }

   if(stateValue === ''){

    setError(state, 'State is required');
   }else{
          setSuccess(state);
   }

};
