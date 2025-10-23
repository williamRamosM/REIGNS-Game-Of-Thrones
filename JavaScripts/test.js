let cont = 0;
let numImg = 0;
const imgs = [
    "../diversos/imagens/dia.jpg",
    "../diversos/imagens/noite.png",
    "../diversos/imagens/demonio.png"
]
let body = document.body
let botao2 = document.getElementById("botao2")
let a = document.getElementById("abrirAbaCreditos")

botao2.addEventListener("click", abrirCerditos)

function abrirCerditos(){
    location.href = "../html/creditos.html"
}

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