let botaoStart = document.getElementById("botaoStart")
let botaoCreditos = document.getElementById("botaoCreditos")
let audio = document.getElementById("audioClick")
let somClick = new Audio('../diversos/audios/somDeClick.mp3');

botaoStart.addEventListener("click", function(){

})

botaoCreditos.addEventListener("click", function(){
    somClick.play().then(r => "tocado");
})