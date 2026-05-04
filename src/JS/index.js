const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {
    imagemAtual++;
    if (imagemAtual > 2) {
        imagemAtual = 0;
    }

    esconderImagens();
    mostrarImagem();
});

setaVoltar.addEventListener('click', function() {
    imagemAtual--; 
    if (imagemAtual < 0) {
        imagemAtual = 2;
    }

    esconderImagens();
    mostrarImagem();
});
