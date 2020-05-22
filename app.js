function sair() {
    localStorage.clear();
    window.location.reload();
}

function teste(cidade) {
    alert(cidade);
}



function iniciaModal(modalID, nomecidade) {
    const modal = document.getElementById(modalID);
    if (modal) {





        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.weatherbit.io/v2.0/forecast/hourly?lang=pt&city=" + nomecidade + "&key=da554c7c0b5a4b5ca3b01e5818e898f5&hours=48", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status = 200) {
                    const modalInner = document.getElementsByClassName(modalID + "-html")[0];
                    modalInner.innerHTML = header + montarTabela(xhr.responseText);
                    modal.classList.add('mostrar');
                    //ao clicar fora e no X para sair do modal
                    modal.addEventListener('click', function (e) {
                        if (e.target.id == modalID || e.target.className == 'fechar') {
                            modal.classList.remove('mostrar');
                        }
                    });
                }
            }
        }
        xhr.send();
    }

}

var header = `
        <tr>
        <th>Clima</th>
        <th>Dia</th>
        <th>Hora</th>
        <th>Data</th>
        </tr>
        `

function montarTabela(listacidade) {
    let result = JSON.parse(listacidade);
    console.log(result.data);
    let table = "";
    for (var i = 0; i < 10; i++) {

        let data = new Date(result.data[i].timestamp_local);
        table += "<tr>" + "<td> " + result.data[i].weather.description + "</td>" +
            "<td> " + new Intl.DateTimeFormat('pt', { weekday: 'long' }).format(data) + "</td>" +
            "<td> " + new Intl.DateTimeFormat('pt', { hour: 'numeric', minute: 'numeric' }).format(data) + "</td>" +
            "<td> " + Intl.DateTimeFormat('pt').format(new Date) + "</td>"
            + "</tr>" 
    }


    console.log(table);
    return table;




}







