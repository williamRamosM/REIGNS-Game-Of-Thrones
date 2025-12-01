let botaoStart = document.getElementById("botaoStart")
let botaoCreditos = document.getElementById("botaoCreditos")
let audio = document.getElementById("audioClick")
let somEntrar = new Audio('diversos/audios/somDeClick.mp3')
let somCreditoStart = new Audio('diversos/audios/somDeClick2.mp3')


const carregamento = document.getElementById("carregamento")
const btnStart = document.getElementById("btnStart")
const musica = document.getElementById("musica")
const loadGif = document.getElementById("load")


botaoStart.addEventListener("click", () => {
    somCreditoStart.play();   
    setTimeout(() => {
        window.location.href = "html/game.html";  
    }, 1500);           
});

botaoCreditos.addEventListener("click", () => {
    somCreditoStart.play();
    setTimeout(() => {
        window.location.href = "html/creditos.html";
    }, 1500);
});

btnStart.addEventListener("click", () => {

    musica.play()

    
    btnStart.style.display = "none"
    loadGif.style.display = "block"

    setTimeout(() => {
        carregamento.classList.add("hidden")
        somEntrar.play()
    }, 3000)
})