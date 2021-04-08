let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_password');
let button = document.getElementById("send_button");

        button.addEventListener("click", function() {
          if(password.value && confirmPassword.value){
            if(password.value == confirmPassword.value){
              password.style.border = "2px solid green";
              confirmPassword.style.border = "2px solid green";
            }else{
              password.style.border = "2px solid red";
              confirmPassword.style.border = "2px solid red";
        }
            }else{
            alert('Remplissez les champs');
        }
});
