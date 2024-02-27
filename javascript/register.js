
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submitbtn = document.getElementById('submitbtn');
let loginbtn = document.getElementById('loginbtn');

let usererror = document.getElementById('usererror');
let emailerror = document.getElementById('emailerror');
let passworderror = document.getElementById('passworderror');

submitbtn.disabled = true;

function valid(){
    if(email.value.indexOf('@') == -1 || email.value.length <  0 || email.value === ""){
        emailerror.innerHTML = "Please Enter A Valid Email";
        emailerror.style.color ="red";
        email.style.border = '1px solid red';
    }
    else if(email.value.indexOf('@') > -1 || email.value.length >  0 || email.value != ""){
        emailerror.innerHTML = "";
        email.style.border = '1px solid green';
    }

    // //////////////////////////// email

    if(username.value === "" || username.value.length < 0 || username.value.length > 15 || username.value.indexOf('_') == -1){
        usererror.innerHTML = " UserName Must Have A UnderScore Mark ( _ ) ";
        usererror.style.color ="red";
        username.style.border = '1px solid red';
    }else if(username.value != "" || username.value.length > 0 || username.value.length <= 15 || username.value.indexOf('_') > -1){
        usererror.innerHTML = "";
        username.style.border = '1px solid green';
    }

     // //////////////////////////// user




    if(password.value.length < 3 || password.value.length >= 20 || password.value === ""){
        passworderror.innerHTML = " Password Length Must Be = 20 Number";
        passworderror.style.color ="red";
        password.style.border = '1px solid red';
    }else if(password.value.length > 3 || password.value.length <= 20 || password.value != ""){
        passworderror.innerHTML = "";
        password.style.border = '1px solid green';
    }

    if(email.value.indexOf('@') > -1 &&  username.value.indexOf('_') > -1 && password.value.length > 3 ){
        submitbtn.disabled =false;
    }else{
        submitbtn.disabled = true;
    }


    submitbtn.onclick = function (){
    localStorage.setItem('username' , username.value);
    localStorage.setItem('email' , email.value);
    localStorage.setItem('password' , password.value);
    clearData()

    window.location = "login.html"
    }


    
}

loginbtn.addEventListener('click' , function (){
    location = "login.html"
})


function clearData(){
    username.value ="";
    email.value = "";
    password.value = "";
}