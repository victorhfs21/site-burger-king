function TrocarImagem(imagemNova){
    document.querySelector(".burger-king").src = imagemNova;
}

function MudarCirculo(corNova){
    let circulo = document.querySelector(".circulo");
    circulo.style.background = corNova;

    let cornome = document.querySelector(".caixa-texto span");
    cornome.style.color = corNova;

    let botao = document.querySelector(".caixa-texto a");
    botao.style.background = corNova;
}

function MudarEscrito(escrito){
    let mudarescrito = document.querySelector(".caixa-texto span");
    mudarescrito.textContent = escrito;
}

