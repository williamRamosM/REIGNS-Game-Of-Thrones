let cont = 0;
let numImg = 0;
const imgs = [
    "../diversos/imagens/dia.jpg",
    "../diversos/imagens/noite.png",
    "../diversos/imagens/demonio.png"
]
let body = document.body
let botaoStart = document.getElementById("botaoStart")
let botaoCreditos = document.getElementById("botaoCreditos")
let a = document.getElementById("abrirAbaCreditos")

botaoStart.addEventListener("click", abrirGame)
botaoCreditos.addEventListener("click", abrirCerditos)

// Funcoes de (botoes) menu

function abrirGame(){
    location.href = "../html/game.html"
}

function abrirCerditos(){
    location.href = "../html/creditos.html"
}

// Retirar depois ->
function acaon(){

    cont++
    if(cont == 1){
        numImg = 0
    }
    else if(cont == 2){
        numImg = 1
    }
    else{
        numImg = 2
        cont = 0;
    }
    body.style.backgroundImage = `url('${imgs[numImg]}')`
}