const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    imagemAtual++;
    if (imagemAtual > 2) {
        imagemAtual = 0;
    }

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function() {
    imagemAtual--; 
    if (imagemAtual < 0) {
        imagemAtual = 2;
    }

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
    
    imagensPainel[imagemAtual].classList.add('mostrar');
});
