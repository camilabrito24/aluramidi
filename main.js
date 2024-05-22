function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play();

    }else{
        console.log("ERRO: Elemento não encontrado ou elemento não é válido.")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    tecla.onclick = function (){
        tocaSom('#som_'+instrumento)
    };

    tecla.onkeydown = function (evento){

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

