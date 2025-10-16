let cont = 0;
let numImg = 0;
const imgs = [
    "../diversos/imagens/dia.jpg"
]
let body = document.body
let botao = document.getElementById("botao")

botao.addEventListener("click", acaon)
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