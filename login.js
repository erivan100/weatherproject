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
         setTimeout(function(){
            localStorage.setItem('token',"logadoteste");
            window.location.href = "index.html";
         },2000);
        
     });
     $('.wrapper').addClass('form-success');
     
     
    
});         