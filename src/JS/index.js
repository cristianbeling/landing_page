const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

