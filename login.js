localStorage.clear();


$("#login-button").click(function (event) {
    event.preventDefault();

    let form = document.getElementById("mainForm");
    var isValid = form.checkValidity();

    if (!isValid) {
        alert("Conta Inexistente");
        return;
    }




    let jsonOBj = { email: form.user.value, password: form.pass.value };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://52.91.139.190/fsapi/users/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    /*   xhr.setRequestHeader("Authorization", "bearer 312421312412312312412312312"); */

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText);
                localStorage.setItem("token", response.token);
                // console.log(xhr.responseText);
                $('.wrapper > .container > h1').html("Seja bem-vindo de volta!");
                $('form').fadeOut(500, function () {

                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 2000);

                });
                $('.wrapper').addClass('form-success');
            }
            else {
                alert("O usuario não existe");
            }
        }
    }
    xhr.send(JSON.stringify(jsonOBj));
});





