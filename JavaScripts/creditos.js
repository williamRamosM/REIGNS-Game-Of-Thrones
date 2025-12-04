let botaoAutorW = document.getElementById('botaoAutorW')
let botaoAutorJ = document.getElementById('botaoAutorJ')
let botaoVoltar = document.getElementById('botaoVoltar')

let divAutorWill  = document.getElementById('autorW')
let divAutorJose  = document.getElementById('autorJ')
let somClick = new Audio('../diversos/audios/somDeClick3.mp3')

botaoAutorW.addEventListener("click", function() {
    let visible = document.getElementById("autorW").style.visibility
    somClick.currentTime = 0
    
    if (visible === "hidden") {
        somClick.play()
        divAutorWill.style.visibility = "visible"
        divAutorJose.style.visibility = "hidden"
    } else {
        divAutorWill.style.visibility = "hidden"
        somClick.play()
    }
})
botaoAutorJ.addEventListener("click", function() {
    let visible2 = document.getElementById("autorJ").style.visibility;
    somClick.currentTime = 0

    if (visible2 === "hidden") {
        somClick.play()
        divAutorJose.style.visibility = "visible"
        divAutorWill.style.visibility = "hidden"
    } else {
        somClick.play()
        divAutorJose.style.visibility = "hidden"
    }
})

botaoVoltar.addEventListener("click", () => {
    somClick.currentTime = 0
    somClick.play();
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 1000)
})