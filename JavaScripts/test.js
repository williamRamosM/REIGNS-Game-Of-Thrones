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


let botaoVoltar = document.getElementById('botaoVoltar')

let botaoAutorW = document.getElementById('botaoAutorW')
let botaoAutorJ = document.getElementById('botaoAutorJ')

let divAutorWill  = document.getElementById('autorW')
let divAutorJose  = document.getElementById('autorJ')


botaoAutorW.addEventListener("click", function() {
    let visible = document.getElementById("autorW").style.visibility;
    if (visible === "hidden") {
        divAutorWill.style.visibility = "visible";
        divAutorJose.style.visibility = "hidden";
    } else {
        divAutorWill.style.visibility = "hidden";
    }
});
botaoAutorJ.addEventListener("click", function() {
    let visible2 = document.getElementById("autorJ").style.visibility;
    if (visible2 === "hidden") {
        divAutorJose.style.visibility = "visible";
        divAutorWill.style.visibility = "hidden";
    } else {
        divAutorJose.style.visibility = "hidden";
    }
});