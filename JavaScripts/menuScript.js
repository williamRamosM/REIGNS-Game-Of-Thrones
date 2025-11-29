let botaoStart = document.getElementById("botaoStart")
let botaoCreditos = document.getElementById("botaoCreditos")
let audio = document.getElementById("audioClick")
let somClick = new Audio('../diversos/audios/somDeClick.mp3');


const carregamento = document.getElementById("carregamento");
const btnStart = document.getElementById("btnStart");
const musica = document.getElementById("musica");
const loadGif = document.getElementById("load");

btnStart.addEventListener("click", () => {

    musica.play().catch(()=>{});

    btnStart.style.display = "none";
    loadGif.style.display = "block";

    setTimeout(() => {
        carregamento.classList.add("hidden");
    }, 3000);
});