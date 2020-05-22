localStorage.clear();


 $("#login-button").click(function(event){
     event.preventDefault();
    
     let form = document.getElementById("mainForm");
     var isValid = form.checkValidity();

     if(!isValid){
         alert("Conta Inexistente");
        return;
     }

     $('.wrapper > .container > h1').html("Seja bem-vindo de volta!");
     $('form').fadeOut(500, function(){
         console.log(form.pass.value);
        let jsonOBj = {email: form.user.value, password: form.pass.value};
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://52.91.139.190/fsapi/users/login", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) { 
               /*  if (xhr.status = 200) {
                    
                } */
                console.log(xhr.responseText);
            }
        }

        xhr.send(JSON.stringify(jsonOBj));
/*          setTimeout(function(){
            localStorage.setItem('token',"logadoteste");
            window.location.href = "index.html";
         },2000);
 */        
     });
     $('.wrapper').addClass('form-success');
     
     
    






     
});         