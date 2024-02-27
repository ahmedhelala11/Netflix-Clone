let email = document.getElementById('email');
let password = document.getElementById('password');



let emailerror = document.getElementById('emailerror');
let passworderror = document.getElementById('passworderror');

let submitbtn = document.getElementById('submitbtn');
let loginbtn = document.getElementById('loginbtn');


submitbtn.disabled=true;

function check(){
    
    if(email.value.indexOf('@') == -1 || email.value.length <  0 || email.value === ""){
        emailerror.innerHTML = "Please Enter A Valid Email";
        emailerror.style.color ="red";
        email.style.border = '1px solid red';
    }
    else if(email.value.indexOf('@') > -1 || email.value.length >  0 || email.value != ""){
        emailerror.innerHTML = "";
        email.style.border = '1px solid green';
    }

    // //////////

    if(password.value.length < 3 || password.value.length >= 20 || password.value === ""){
        passworderror.innerHTML = " Password Length Must Be = 20 Number";
        passworderror.style.color ="red";
        password.style.border = '1px solid red';
    }else if(password.value.length > 3 || password.value.length <= 20 || password.value != ""){
        passworderror.innerHTML = "";
        password.style.border = '1px solid green';
    }


    if(email.value.indexOf('@') > -1 && password.value.length > 3 ){
        submitbtn.disabled =false;
    }else{
        submitbtn.disabled = true;
    }

    submitbtn.onclick = function (e){
        e.preventDefault()
        if(localStorage.email === email.value && localStorage.password === password.value){
            email.value = "" ;
            password.value = "";
            setTimeout(()=>{
                location = "main.html"
            },2000)
        }else{
            alert('enter a valid data')
        }
    }
}





loginbtn.addEventListener('click' , function(){
    location = "register.html"
})