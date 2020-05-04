function checkLogin(){
  let token = localStorage.getItem("token");
  if(!token){
    window.location.href = "login.html";
  }
}


checkLogin();