const form = document.querySelector("#form");
const btnSumbmit=document.querySelector('#submit')
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

btnSumbmit.addEventListener("click", (e) =>{

   e.preventDefault();
    if(validateInputs()){
         alert("Register form submit successfully")
    }

})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success=true;

    if (usernameVal==='') {
        success=false;
        setError(username,"Username is required")  
    }else{
        success=true;
        setSucess(username)
    }

    if(emailVal===''){
        success=false;
        setError(email,'Enter email ID')
    }else if(!isValidEmail(emailVal)){
        success=false;
        setError(email,'Enter valid Email id')
    }else{
        success=true;
        setSucess(email)
    }

    if(passwordVal===''){
        success=false;
        setError(password ,'enter password required')
    }else if(passwordVal.length<8){
        success=false;
        setError(password,'password must 8 characters')
    }else{
        success=true;
        setSucess(password)
    }

    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'enter confirm password')
    }else if(cpasswordVal!=passwordVal){
        success=false;
        setError(cpassword,'password does not match')
    }else{
        success=true;
        setSucess(cpassword)
    }
    return success;
}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSucess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
