function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "Obrigado por visitar meu portfólio!";
}

const slides = [
    "img/slide1.png",
    "img/slide2.png",
    "img/slide3.png"
];

let slideAtual = 0;

function proximoSlide(){

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    document.getElementById("slide").src = slides[slideAtual];
}

function voltarSlide(){

    slideAtual--;

    if(slideAtual < 0){
        slideAtual = slides.length - 1;
    }

    document.getElementById("slide").src = slides[slideAtual];
}