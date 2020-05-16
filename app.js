function sair(){
    localStorage.clear();
    window.location.reload();
}

function teste(cidade){
    alert(cidade);
}



function iniciaModal (modalID){
    const modal = document.getElementById(modalID);
    if(modal){
    modal.classList.add('mostrar');
    //ao clicar fora e no X para sair do modal
    modal.addEventListener('click', function(e){
        if (e.target.id == modalID  || e.target.className == 'fechar'){
            modal.classList.remove('mostrar');
        }
    });
}
}

const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){
    iniciaModal('modal-promocao')
});



    

