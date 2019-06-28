const mapaFundo = document.querySelector('[data-screen="1"]');
const pontoInfo = document.querySelector('[data-screen="1"] .info-ponto');
const ponto = document.querySelector('.ponto');
const back = document.querySelector('[data-screen="1"] .back');

function interacao1(){
    ponto.classList.toggle('act');
    pontoInfo.classList.toggle('act');
}

ponto.addEventListener("click", interacao1);
back.addEventListener("click", interacao1);


const btnIcon = document.querySelector('[data-screen="1"] .cta .-horario');
const screen2 = document.querySelector('[data-screen="2"]');

function interacaoScreen(){
    screen2.classList.add('act');
    mapaFundo.classList.remove('act');
}

btnIcon.addEventListener("click", interacaoScreen);


const back2 = document.querySelector('[data-screen="2"] .back');

back2.addEventListener("click", function (){
    screen2.classList.remove('act');
    mapaFundo.classList.add('act');
})


const abreMenu = document.querySelector('.btn-menu');
const fechaMenu = document.querySelector('.m-l-btn');
const menuLat = document.querySelector('.menu-lateral');

function actMenuLat (){
    menuLat.classList.toggle('act');
}

abreMenu.addEventListener("click", actMenuLat);
fechaMenu.addEventListener("click", actMenuLat);


const checkIn = document.querySelector('.check-in');
const checkTela = document.querySelector('.check-screen');




checkIn.addEventListener("click", function(){
checkTela.classList.add('act');

const btnConfirma = document.querySelector('.check-screen .confirm');
const checkForm = document.querySelector('form');
const checkModal = document.querySelector('.modal');

const loading = document.querySelector('.loading');
const sucess = document.querySelector('.sucess');


btnConfirma.addEventListener("click", function(){
    checkForm.classList.add('hide');
    checkModal.classList.add('act');

    if(checkModal.classList.contains('act')){
        setTimeout( loadingFirst, 4000 );

        function loadingFirst(){
            loading.classList.add('hide');
            sucess.classList.remove('hide');
        }

    }

});

if(sucess.classList != sucess.classList.contains('hide') ){
    setTimeout(closingModal, 8000);

    function closingModal(){
        checkTela.classList.toggle('act');
        checkForm.classList.toggle('hide');
        checkModal.classList.toggle('act');
        loading.classList.toggle('hide');
        sucess.classList.add('hide');
    }
}



});





