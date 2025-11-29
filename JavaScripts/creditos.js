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