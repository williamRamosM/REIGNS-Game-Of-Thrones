const espirito = {
    nome: "Espírito dos Caídos",
    foto: "../diversos/imagens/Espirito.png",
    fundo: "../diversos/imagens/Vilarejo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const arcebispo = {
    nome: "Arcebispo",
    foto: "../diversos/imagens/Arcebispo.png",
    fundo: "../diversos/imagens/Vilarejo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const general = {
    nome: "General Conventon",
    foto: "../diversos/imagens/General.png",
    fundo: "../diversos/imagens/Castelo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const freira = {
    nome: "Irmâ Júlia",
    foto: "../diversos/imagens/Julia.png",
    fundo: "../diversos/imagens/Vilarejo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const rex = {
    nome: "Rex",
    foto: "../diversos/imagens/Rex.png",
    fundo: "../diversos/imagens/Castelo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const conselheiro = {
    nome: "Senhor Gotfried",
    foto: "../diversos/imagens/Gotfried.png",
    fundo: "../diversos/imagens/Castelo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const lula = {
    nome: "Luís do Povo",
    foto: "../diversos/imagens/Luis.png",
    fundo: "../diversos/imagens/Vilarejo.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const diabo = {
    nome: "Briggs",
    foto: "../diversos/imagens/Briggs.png",
    fundo: "../diversos/imagens/demonio.png",
    musica: "../diversos/audios/Castelo.mp3"
}

const portaDupla = {
    nome: "Duas Portas",
    foto: "../diversos/imagens/DuasPortas.png",
    fundo: "../diversos/imagens/Dungeon.png",
    musica: "../diversos/audios/Dungeon.mp3"
}

const porta = {
    nome: "Porta",
    foto: "../diversos/imagens/Porta.png",
    fundo: "../diversos/imagens/Dungeon.png",
    musica: "../diversos/audios/Dungeon.mp3"
}

const salaBau = {
    nome: "Sala com um baú",
    foto: "../diversos/imagens/Bau.png",
    fundo: "../diversos/imagens/Dungeon.png",
    musica: "../diversos/audios/Dungeon.mp3"
}

const portaChefe = {
    nome: "Porta para uma sala com grande ameaça",
    foto: "../diversos/imagens/PortaDoChefe.png",
    fundo: "../diversos/imagens/Dungeon.png",
    musica: "../diversos/audios/Dungeon.mp3"
}

const portaChefao = {
    nome: "Porta para encontrar uma lenda antiga",
    foto: "../diversos/imagens/PortaMaliketh.png",
    fundo: "../diversos/imagens/Dungeon.png",
    musica: "../diversos/audios/Dungeon.mp3"
}

const malenia = {
    nome: "Malenia, a Lâmina do Satan",
    foto: "../diversos/imagens/Malenia.png",
    fundo: "../diversos/imagens/PortaDoChefe.png",
    musica: "../diversos/audios/Malenia.mp3"
}

const godfrey = {
    nome: "Godfrey, o Guerreiro",
    foto: "../diversos/imagens/Godfrey.png",
    fundo: "../diversos/imagens/PortaDoChefe.png",
    musica: "../diversos/audios/Godfrey.mp3"
}

const morgott = {
    nome: "Morgott, o Rei das Feras",
    foto: "../diversos/imagens/Morgott.png",
    fundo: "../diversos/imagens/PortaDoChefe.png",
    musica: "../diversos/audios/Morgott.mp3"
}

const radahn = {
    nome: "Radahn, o Senhor das Estrelas",
    foto: "../diversos/imagens/Radahn.png",
    fundo: "../diversos/imagens/PortaDoChefe.png",
    musica: "../diversos/audios/Radahn.mp3"
}

const mohg = {
    nome: "Mohg, o Lorde do Sangue",
    foto: "../diversos/imagens/Mohg.png",
    fundo: "../diversos/imagens/PortaDoChefe.png",
    musica: "../diversos/audios/Mohg.mp3"
}

const maliketh = {
    nome: "Maliketh, a Morte",
    foto: "../diversos/imagens/Maliketh.png",
    fundo: "../diversos/imagens/PortaMaliketh.png",
    musica: "../diversos/audios/Maliketh.mp3"
}

let arrayNum2 = [
    arcebispo,
    general,
    freira,
    rex,
    conselheiro,
    lula,
    diabo
    // portaDupla,
    // porta,
    // salaBau,
    // portaChefe,
    // portaChefao,
    // malenia,
    // godfrey,
    // morgott,
    // radahn,
    // mohg,
    // maliketh
    
]
let divGame = document.getElementById("game");
let nomeP = document.getElementById("nomePers")
let fotoP = document.getElementById("fotoPers")
let fundoP = document.getElementById("imgFundoId")
let musicaP = document.getElementById("musicaPers")

let botaoLeft = document.getElementById("btEscolhaLeft")
let botaoRight = document.getElementById("btEscolhaRight")
let botaoRestart = document.getElementById("restart")
let botaoStart = document.getElementById("start")
let botaoConfirm = document.getElementById("confirmarName")

let igrejaPag = document.getElementById("igreja")
let riquesaPag = document.getElementById("riquesa")
let exercitoPag = document.getElementById("exercito")
let povoPag = document.getElementById("povo")
let anoPag = document.getElementById("ano")
let nomeReiPag = document.getElementById("nombreRei")
let reinadoPag = document.getElementById("reinado")

let falasMDT = document.getElementById("dialogMestreTemp")
let informNamePag = document.getElementById("informName")
let imgMDT = document.getElementById("imgMetreTemp")
let digNamePag = document.getElementById("digName")
let nomeMDT = document.getElementById("nomeDoMDT")
let nameGameOverPag = document.getElementById("nameGameOver")

let igreja = 10
let riquesa = 10
let exercito = 10
let povo = 10
let ano = 515
let reinado = 0
let vida = true

let personagemAtual = nomeReiPag

let sistemEscolha = 0
let aleatorio = 0
let final = ""
let verifStart = false
let verifSitDeFalas = 0

sistemaFalasForMDT()
sistemaDeVerifStart()

botaoLeft.addEventListener("click", function(){
    decissaoDoReiLeft()
    localStorage.clear()
})

botaoRight.addEventListener("click", function(){
    decissaoDoReiRight();
    localStorage.clear()
})

botaoRestart.addEventListener("click", function(){
    location.reload()
})

botaoStart.addEventListener("click", function(){
    verifStart = true
    verifSitDeFalas = 3
    botaoStart.style.display = "none"
    localStorage.clear()
    sistemaFalasForMDT()
})

botaoConfirm.addEventListener("click", function(){

    if(digNamePag.value.length === 0 || !digNamePag.value.trim()){
        alert("Mestre Do Tempo: \n" +
            "\n" +
            "Você deve colocar um nome de rei que seja valido!")
    }
    else{
        informNamePag.style.display = "none"
        digNamePag.style.display = "none"
        botaoConfirm.style.display = "none"
        nomeReiPag.innerText = digNamePag.value
        verifSitDeFalas += 1
        sistemaFalasForMDT()
    }
})

function escolherPersonagem() {

    let salvo = localStorage.getItem("personagemSalvo");

    if (salvo != null) {
        personagemEscolhido(Number(salvo));
    } else {
        sistemEscolha = 0
        aleatorio = Math.floor(Math.random()*6);
        localStorage.setItem("personagemSalvo", aleatorio);
        personagemEscolhido(aleatorio);
    }
}

function personagemEscolhido(personagem) {
    nomeP.textContent = arrayNum2[personagem].nome;
    fotoP.src = arrayNum2[personagem].foto;
    fundoP.style.backgroundImage = `url('${arrayNum2[personagem].fundo}')`
    musicaP = arrayNum2[personagem].musica;
}

function decissaoDoReiLeft() {
    localStorage.clear()
    escolherPersonagem();
    sistemEscolha = 1
    sistemaDialogosAndAcontecimentos(aleatorio)
    atualizarStatus()
}

function decissaoDoReiRight() {
    localStorage.clear()
    escolherPersonagem();
    sistemEscolha = 2
    sistemaDialogosAndAcontecimentos(aleatorio)
    atualizarStatus()
}

function atualizarStatus(){
    igrejaPag.innerText = "Igreja: "+igreja
    riquesaPag.innerText = "Riquesa: "+riquesa
    exercitoPag.innerText = "Exercito: "+exercito
    povoPag.innerText = "Povo: "+povo
    anoPag.innerText = "Ano: " +ano

    if(reinado === 1){
        reinadoPag.innerText = reinado+" ano no reinado"
    }
    else{
        reinadoPag.innerText = reinado+" anos no reinado"
    }

    sistemaVerificarSituacao(exercito, igreja, riquesa, povo)
    verificarSitDeVida()
}

function sistemaDialogosAndAcontecimentos(numero) {
    let personagem = arrayNum2[numero]
    let personagemAtual = nomeReiPag.innerText
    let text = ""
    const dialogoAleatorio = Math.floor(Math.random()*5)

    if (personagem === arrayNum2[1]) {

        if (dialogoAleatorio === 1) {


            // alert(`${personagem}: Senhor, precisamos construir uma igreja nova.`)
            // sistemEscolha = prompt(`[1] - Já não temos o suficiente? (Igreja - diminuirá bastante)
            //             [2] - Sim (Riquesas - diminuirá; Igreja - aumentará bastante)`)
            if (sistemEscolha === 1) {
                igreja -= 3
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                igreja += 3
                riquesa -= 2

                ano++
                reinado++

            }

        }
        else if (dialogoAleatorio === 2) {

            // alert(`${personagem}: Senhor, gostaria de realizar uma missa em nome do seu pai.`)
            // sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Povo - aumentará; Exército - aumentará; Riquesa - diminuuirá)
            //               [2] - Sim (Igreja - aumentará consideravelmente; Povo - dimminuirá; Exército - diminuirá; Riquesa - diminuirá bastante)`)
            if (sistemEscolha === 1) {
                igreja -= 2
                povo += 2
                exercito += 2
                riquesa -= 2
                ano++
                reinado++
            } else if (sistemEscolha === 2) {
                igreja += 4
                povo -= 2
                riquesa -= 3
                exercito -= 2
                ano++
                reinado++
            }
        }
        else if (dialogoAleatorio === 3) {
            // alert(`${personagem}: Senhor, dê-nos poder suficiente para exaltar a justiça divina
            //             em seu país. O papa está pronto para pagar o preço.`)
            // sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Povo - diminuirá; Riquesa - Aumentará)
            //               [2] - Sim (Igreja - aumentará bastante; Riquesa - diminuirá)`)
            if (sistemEscolha === 1) {

                igreja -= 2
                povo -= 2
                riquesa += 2
                ano++
                reinado++
            } else if (sistemEscolha === 2) {

                igreja += 3
                riquesa -= 2
                ano++
                reinado++
            }
        }
        else if (dialogoAleatorio === 4) {

            // alert(`${personagem}: Senhor, poderia fazer com que os homens do exercito se torne mais
            //             fieis?`)
            // sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Exercito - Aumentará)
            //               [2] - Sim (Igreja - aumentará bastante; Exercito - Diminuirá pouco)`)
            if (sistemEscolha === 1) {
                igreja -= 2
                exercito += 2
                ano++
                reinado++
            } else if (sistemEscolha === 2) {
                igreja += 2
                exercito -= 1
                ano++
                reinado++
            }
        }
        else if (dialogoAleatorio === 5) {

            // alert(`${personagem}: Senhor, Gostaríamos de estabelecer  um novo novo tributo para a igreja... Compartilhado com a coroa é claro`)
            // sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá bastante; povo - aumentará;)
            //               [2] - Sim (Igreja - aumentará bastante; Povo - Diminuirá; Riquesa - diminuirá bastante)`)
            if (sistemEscolha === 1) {

                igreja -= 3
                povo += 2
                ano++
                reinado++
            } else if (sistemEscolha === 2) {

                igreja += 3
                povo -= 2
                riquesa -= 3
                ano++
                reinado++
            }
        }

    }
    else if (personagem === arrayNum2[2]) {

        if (dialogoAleatorio === 1) {

            // alert(personagem + ": Opa minha chefia.. gostaria de saber se podia melhorar nossa tropa! um combate de espadas nao pode ser de madeira.. Haha..")
            // sistemEscolha = prompt("[1] sim - (exercito - aumentará; riquesa - diminuirá pouco) \n" +
            //     "[2] nao - (exercito - diminuirá pouco;")
            if (sistemEscolha === 1) {
                exercito += 2
                riquesa -= 1
                ano++
                reinado++
            } else if (sistemEscolha === 2) {
                exercito -= 1
                ano++
                reinado++
            }
        }
        else if (dialogoAleatorio === 2) {

            // alert(personagem + ": Rei " + personagemAtual + ".. estamos precisando de mais pessoas para o exercito! se nao acabaremos como o reino do lado..")
            // sistemEscolha = prompt("[1] sim - (exercito - aumentará pouco; povo - diminuirá) \n" +
            //     "[2] nao - (exercito - diminuirá pouco;")
            if (sistemEscolha === 1) {
                exercito += 1
                povo -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                exercito -= 1
                ano++
                reinado++

            }

        }
        else if (dialogoAleatorio === 3) {

            // alert(personagem + ":Fale meu Rei " + personagemAtual + ".. nossa tropa está com uma vontade de atacar o reino do lado.. poderia conceder?")
            // sistemEscolha = prompt("[1] sim - (exercito - diminuirá; riquesa - aumentará pouco) \n" +
            //     "[2] nao - (exercito - diminuirá pouco; povo - aumentará")
            if (sistemEscolha === 1) {
                riquesa += 1
                exercito -= 3
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo += 2
                exercito -= 1
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 4) {

            // alert(personagem + ": Mereticimo rei " + personagemAtual + ".. nosso equipamento nao é tam sufesticado e tambem nao temos tantos homems para o exercito /n" +
            //     "o que acha de arrumarmos isso?")
            // sistemEscolha = prompt("[1] sim - (exercito - aumentará bastante; riquesa - diminuirá; povo - diminuirá pouco) \n" +
            //     "[2] nao - (riquesa - aumetará pouco; exercito - diminuirá; povo - aumentará pouco")
            if (sistemEscolha === 1) {

                exercito += 3
                riquesa -= 2
                povo -= 1
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                riquesa += 1
                exercito -= 2
                povo += 1
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 5) {

            // alert(personagem + ":Venho te dizer Rei" + personagemAtual + ".. que está tendo uma uma revolta lá na igreja.. quer que acabe com isso?")
            // sistemEscolha = prompt("[1] sim - (povo - diminuirá; riquesa - diminuirá pouco) \n" +
            //     "[2] nao - (povo - aumentara pouco; exercito - diminuirá pouco")
            if (sistemEscolha === 1) {
                povo -= 2
                riquesa -= 1
                ano++
                reinado++
            } else if (sistemEscolha === 2) {
                povo += 1
                exercito -= 1
                ano++
                reinado++
            }
        }

    }
    else if (personagem === arrayNum2[3]) {

        if (dialogoAleatorio === 1) {

            //     alert(`${personagem}: Senhor, sou ${personagem}, a diretora de uma das escolas.
            //               Ajude-nos a cuidar de nossos infantes!`)
            //     sistemEscolha = prompt(`[1] - Não (Povo - diminuirá; Igreja - diminuirá)
            // [2] - Sim (Povo - aumentará; Igreja - aumentará; Riquesas - diminuirá bastante)`)

            if (sistemEscolha === 1) {
                povo -= 2
                igreja -= 2
                ano++
                reinado++
                fecharAcont = 1

            } else if (sistemEscolha === 2) {
                povo += 2
                igreja += 2
                riquesa -= 3
                ano++
                reinado++
                fecharAcont = 1
            }

        }
        else if (dialogoAleatorio === 2) {

            // alert(`${personagem}: Senhor, hoje é o seu aniversário. Gostaríamos de realizar uma festa`)
            // sistemEscolha = prompt(`[1] - Aniversários não importam. (Igreja - diminui; povo diminui;)
            //             [2] - Sim (Igreja - aumenta; Povo - aumenta; Riquesa - diminui)`)

            if (sistemEscolha === 1) {

                igreja -= 2
                povo -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                igreja += 2
                povo += 2
                riquesa -= 2
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 3) {


            // alert(`${personagem}: Senhor, a igreja não quer ajudar o povo. Por favor dê auxílio aos necessistados`)
            // sistemEscolha = prompt(`[1] - Não. (Igreja - aumenta; povo - diminui bastante;)
            //             [2] - Sim (Igreja - diminui bastante; Povo - aumenta; Riquesa - diminui)`)
            if (sistemEscolha === 1) {

                igreja += 2
                povo -= 3
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                igreja -= 3
                povo += 2
                riquesa -= 2
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 4) {

            // alert(`${personagem}: Senhor, os comerciantes gostariam de começar uma nova guilda e enviar um representante para a corte`)
            // sistemEscolha = prompt(`[1] - Sim. (Igreja - diminui um pouco; povo diminui pouco; Exército - diminui pouco; Riquesa - aumenta bastante)
            //             [2] - Não (Riquesa - diminui)`)

            if (sistemEscolha === 1) {

                riquesa += 3
                exercito -= 1
                povo -= 1
                igreja -= 1
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                riquesa -= 2
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 5) {

            // alert(`${personagem}: Senhor, queremos realizar um evento com outros reinos, os quais tem outras religiões, a fim de gerar uma união entre eles`)
            // sistemEscolha = prompt(`[1] - Não. (Igreja - aumenta; povo - diminui pouco; Exército - diminui pouco;)
            //             [2] - Sim (Riquesa - diminui; Povo - aumenta; Exército - aumenta; Igreja - diminui bastante)`)
            if (sistemEscolha === 1) {

                igreja += 2
                povo--
                exercito--
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                riquesa -= 2
                povo += 2
                igreja -= 3
                ano++
                reinado++

            }
        }

    }
    else if (personagem === arrayNum2[4]) {

        const sorteOuAzar = Math.floor(Math.random() * (8 - 1 + 1)) + 1

        if (sorteOuAzar >= 1 && sorteOuAzar <= 4) { // acontecimento de (Azar) <<--

            // alert(`${personagem}: Waufwauf! WAF! (Rex quer te levar para uma sala).`)
            // sistemEscolha = prompt(`[1] - Seguir
            //             [2] - Ignorar`)
            if (sistemEscolha === 1) {

                //           alert(`Rex te levou para a sala, onde ele te mostra um cara roubando suas joias. Depois disso,
                // o ladrão taca fogo em tudo que roubou e tira a própria vida. Mesmo assim, o povo amou a atitude do cachorro`)

                riquesa -= 4
                povo += 3
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                //           alert(`${personagem} queria te levar para a sala, onde ele ia te mostra um cara roubando suas joias. Depois disso,
                // o ladrão foge taca fogo em igrejas, mata 10 civis e queima tudo que roubo. Depois tira a própria vida,
                // mas tendo orgulho de te colocar no prejuízo. Com isso, a segurança é aumentada`)

                riquesa -= 4
                igreja -= 3
                povo -= 3
                exercito += 5
                ano++
                reinado++
                fecharAcont = 1
            }
        }
        else { // acontecimento de (sort) <<--


            // alert(`${personagem}: Waufwauf! WAF! (Rex quer te levar para uma sala).`)
            // sistemEscolha = prompt(`[1] - Seguir
            //                        [2] - Ignorar`)
            if (sistemEscolha === 1) {
                //             alert(`${personagem} te levou para uma sala secreta que encontrou, onde tinha muito dinheiro.
                // Mesmo que o povo não tenha gostado do fato de que tu quis ficar com todo o dinheiro, saiu no lucro`)

                povo -= 1
                riquesa += 4
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                //             alert(`Provavelmente ${personagem} queria te mostra algo muito incrível, mas nunca será descoberto
                // devido à sua atitude`)
                ano++
                reinado++

            }
        }

    }
    else if (personagem === arrayNum2[5]) {

        if (dialogoAleatorio === 1) {

            // alert(`${personagem}: Senhor, gostaríamos de construir uma escola
            //         na capital para instruir o povo.`)
            // sistemEscolha = prompt(`[1] - Não (Povo - diminuirá; Igreja - diminuirá)
            //              [2] - Sim (Povo - aumentará; Igreja - aumentará; Riquesa - diminuirá bastante)`)
            if (sistemEscolha === 1) {
                povo -= 2
                igreja -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo += 2
                igreja += 2
                riquesa -= 3
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 2) {

            // alert(`${personagem}: Senhor, devemos fazer alianças com outros reinos para manter-mos a soberania.
            //         Eles podem acabar com o nosso reino.`)
            // sistemEscolha = prompt(`[1] - Não precisa! Nós sabemos nos virar (Exército - diminuirá; Povo - aumentará;)
            //              [2] - Sim, precisamos nos manter (Povo - diminuirá bastante; Exército - aumentará; Riquesa - aumentará consideravelmente)`)
            if (sistemEscolha === 1) {

                povo += 2
                exercito -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                povo -= 3
                exercito += 2
                riquesa += 4
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 3) {

            // alert(`${personagem}: Senhor, um reino vizinho está se fortalecendo, deveríamos atacar eles.`)
            // sistemEscolha = prompt(`[1] - Sim, precisamos (Exército - diminuirá; Povo - aumentará)
            //              [2] - Não precisa! Quem teria coragem? (Povo - diminuirá; Exército - aumentará`)
            if (sistemEscolha === 1) {
                exercito -= 2
                povo += 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo -= 2
                exercito += 2
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 4) {

            // alert(`${personagem}: Senhor, a foz do Rio Pingo é perigosa para viajantes. Deveríamos limpar a região.`)
            // sistemEscolha = prompt(`[1] - Sim (Riquesa - diminuirá; Povo - aumentará bastante)
            //              [2] - Não (Povo - diminuirá bastante;`)

            if (sistemEscolha === 1) {

                povo += 3
                riquesa -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo -= 3
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 5) {

            // alert(`${personagem}: Senhor, a sua esposa é amada pelo povo. Dê poder a ela!`)
            // sistemEscolha = prompt(`[1] - Sim (Exército - aumenta um pouco; Povo - aumentará)
            //              [2] - Não (Povo - diminuirá bastante; Exército - diminuirá um pouco; Riquesa - aumenta um pouco`)

            if (sistemEscolha === 1) {

                povo += 2
                exercito += 1
                ano++
                reinado++

            } else if (sistemEscolha === 2) {

                povo -= 3
                exercito -= 1
                riquesa += 1
                ano++
                reinado++

            }
        }
    }
    else if (personagem === arrayNum2[6]) {

        if (dialogoAleatorio === 1) {

            // alert(`${personagem}: Senhor, cereais estão muito baratos. Deverias ajustar o preço do pão.`)
            // sistemEscolha = prompt(`[1] - Aumente um pouco. (Riquesas - aumentará)
            //             [2] - Dobre! (Povo - diminuirá consideravelmente; Riquesas -aumentará estrondosamente)`)
            if (sistemEscolha === 1) {
                riquesa += 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                riquesa += 5
                povo -= 4
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 2) {

            // alert(`${personagem}: Senhor, O Rio Pingo está alagando, precisamos da igreja e do exército.`)
            // sistemEscolha = prompt(`[1] - Sim. (Povo - Aumenta bastante; Riquesa - diminui; igreja - diminui; exercito - diminui)
            //             [2] - Não. (Povo - diminuirá bastante; Riquesas - aumentará)`)
            if (sistemEscolha === 1) {
                exercito -= 2
                igreja -= 2
                povo += 3
                riquesa -= 2
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo -= 3
                riquesa += 2
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 3) {

            // alert(`${personagem}: Senhor, encontramos minas de ouro devemos cavar mais?`)
            // sistemEscolha = prompt(`[1] - Sim. (Povo - Diminuirá; Riquesa - Aumentará muito)
            //             [2] - Não. (Povo - Aumentará; Riquesa - Diminuirá pouco)`)
            if (sistemEscolha === 1) {
                povo -= 2
                riquesa += 3
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo += 2
                riquesa -= 1
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 4) {

            // alert(`${personagem}: Senhor, a colheita parece estar com algumas pragas como pulgoes, poderia finaciar para acabar com isso?`)
            // sistemEscolha = prompt(`[1] - Sim. (Povo - Aumenta bastante; Riquesa - diminui; exercito - diminui)
            //             [2] - Não. (Povo - Diminuirá bastante; )`)
            if (sistemEscolha === 1) {
                povo += 3
                riquesa -= 2
                exercito -= 1
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo -= 3
                ano++
                reinado++

            }
        }
        else if (dialogoAleatorio === 5) {

            //         alert(`${personagem}: Senhor, Fomos informados que alguem de um lugar distante chamado RichardMen tentara matar nosso general.
            // quer faser algo sobre isso?`)
            //         sistemEscolha = prompt(`[1] - Sim. (Povo - Diminuirá; Riquesa - diminui)
            //                     [2] - Não. (Povo - Aumentará; Exercito - Diminuirá muito)`)
            if (sistemEscolha === 1) {
                povo -= 2
                riquesa -= 1
                ano++
                reinado++

            } else if (sistemEscolha === 2) {
                povo += 2
                exercito -= 4
                ano++
                reinado++

            }
        }

    }
    else if (personagem === arrayNum2[7]) {

        if (igreja < 10 && povo < 10 && exercito < 10 && riquesa < 10) {
            text = `${personagem}: EU VIM PARA TE LEVAR ${personagemAtual}. Ai meu querido amiguinho, EU VOU ACABAR
           COM VOCÊ BELO REI, si fudeu!
           ${personagemAtual}: OQUE?!`
            vida = `morto`
            final = final + `${personagemAtual} morreu por uma captura oportunista do diabo.`

            ano++
            reinado++
        }
        else {
            text = `${personagem}: Hoje pode ser um dia bom para ti, mas está sendo quase seu funeral ${personagemAtual}.
          LEMBRE-SE: TU VAI MORRER QUANDO ESTIVER EM UM MOMENTO RUIM, WAHAHAHAHAHAHAHA!
          ${personagemAtual}: Isso é para ser uma ameaça?`

            riquesa  -= 2
            povo  -= 2
            igreja  -= 2
            exercito -= 2
            ano++
            reinado++
        }

    }
    return text

    //--------

}

function sistemaVerificarSituacao(exercito, igreja, riquesa, povo ){
    let text = ""

    if(exercito <= 0){
        text = text+`${arrayNum2[2]}: Nosso exército está muito fraco ${personagemAtual},
    o exército francês soube da nossa situção e veio nos conquistar.
    ESTAMOS MORTOS!
    ${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por invasão.`
        vida = false
    }
    else if(exercito >= 20){
        text = text+`${arrayNum2[2]}: Estamos em uma situação peculiar senhor
  ${personagemAtual}, acho que o seu reinado não está muito bom, mesmo que o
  exército esteja poderoso. Eu vou fazer uma mudança nessa reino, graças aos
  investimentos que tu fez em meus homens. Foi bom ser seu general,
  bom até agora
  ${personagemAtual}: OQUE?!`

        final = final+`${personagemAtual} morreu por golpe do exército`
        vida = false
    }
    else if(igreja <= 0){
        text = text+`${arrayNum2[1]}: ${personagemAtual}! COMO OUSA DESRESPEITARMOS?!
    O DIABO VIRÁ ATRÁS DE NÓS POR CULPA SUA, SE NÃO AGIRMOS RÁPIDO!
    TU VAI QUEIMAR PELO BEM DE NOSSO REINO E DEUS, QUEIME NO INFERNO!
    ${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por desespero da igreja em se proteger de alguém se importava com a ameaça do diabo`
        vida = false
    }
    else if(igreja >= 20){
        text = text+`${arrayNum2[1]}: ${personagemAtual}. Nossa religião prevaleceu muito,
    agradeço pela sua colaboração, mas tu não é puro, sei de muitas
    coisas que fez reinando e até antes de reinar. Eu me declaro novo
    chefe do reino por enquanto, e irei colocar um novo rei, só que puro.
    ${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por dominância da igreja, os fazendo querer transformar o clero na predominância`
        vida = false
    }

    else if(riquesa <= 0){
        text = text+`${arrayNum2[7]}: — Majestade… ou melhor, antigo senhor destas terras… Hoje não venho pedir, venho falar a verdade que o povo sussurra nas feiras e nos campos. O reino está morrendo. E não foi pela seca, nem pela praga, nem pelo inimigo estrangeiro. Foi pelo seu comando.

Enquanto o povo pobre passava fome e frio, vosmecê mandava os guardas baterem às portas de madrugada, levando homens, mulheres e até jovens sem crime provado. Chamava isso de “ordem”, mas era apenas medo disfarçado. E medo não enche barriga, não educa criança, não cura doença.

Nós gritamos por pão, e recebemos açoite. Pedimos escolas, e ganhamos mais soldados. Queríamos curar os males do reino, mas vosmecê preferiu amarrar-nos com correntes.

E o pior, Majestade… o pior é que vosmecê sabia que esse caminho só levaria à ruína. Pois quando se governa apenas com ferro e fogo, cedo ou tarde, o povo deixa de temer… e começa a se rebelar.

Hoje, o campo inteiro se junta nesta praça. Não viemos para coroá-lo, mas para julgá-lo. E o julgamento foi feito, não por nobres em tronos de ouro, mas por lavradores, ferreiros, costureiras… e o veredito é um só: o senhor traiu o reino.

Assim, por tamanho erro e por tamanha tirania, vosmecê será enforcado, para que sirva de lição a todos os que um dia pensarem que o poder é mais importante que o povo. Que o seu fim seja o aviso: nenhum rei é maior que a justiça.
${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por revolução que o povo fez devido a crise financeira do reino`
        vida = false
    }

    else if(riquesa >= 20){
        text = text+`${arrayNum2[7]}: — Majestade… ou devo chamá-lo de colecionador de moedas alheias?

Durante anos, vosmecê discursou sobre honra, transparência e lealdade ao reino. Nós acreditamos. Nós marchamos ao seu lado nas festas, batemos palmas nos discursos e até defendemos seu nome nas tavernas.

Mas agora a verdade veio à tona — e não foi pelas suas palavras, mas pelo som do ouro caindo no chão. Descobrimos salas secretas, cofres abarrotados, galerias escondidas sob o palácio. Uma fortuna incalculável, tão grande que nem mesmo três reinados dariam conta de gastar.

E para quê? Não era para fortalecer o reino, não era para construir pontes ou escolas, nem para proteger nossas fronteiras. Era para se empilhar ouro sobre ouro, moedas sobre moedas, apenas para o prazer de possuir. O senhor não guardava para o povo, guardava de nós.

O trono não é um cofre, Majestade. A coroa não é uma senha de acesso à riqueza. O rei é um guardião, não um acumulador. Mas vosmecê confundiu seu dever com seu desejo, e seu desejo se tornou maior do que a própria coroa.

Hoje o julgamento é público, e a sentença, irrevogável. Não é só o ouro que será devolvido ao reino; o senhor também devolverá sua vida, pois não há crime maior do que trair a confiança de todos aqueles que lhe chamavam de líder.

A forca está erguida, o carrasco espera. Que o último som que ouça não seja o tilintar das moedas, mas o eco das vozes que um dia acreditaram no senhor. Pois a justiça não mede riqueza — mede caráter, e o seu foi vendido pelo peso do ouro.
${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por invasão do povo por acumular riquesas`
        vida = false
    }
    else if(povo <= 0){
        text = text+`${arrayNum2[7]}: — Majestade… ou devo chamá-lo de colecionador de moedas alheias?

Durante anos, vosmecê discursou sobre honra, transparência e lealdade ao reino. Nós acreditamos. Nós marchamos ao seu lado nas festas, batemos palmas nos discursos e até defendemos seu nome nas tavernas.

Mas agora a verdade veio à tona — e não foi pelas suas palavras, mas pelo som do ouro caindo no chão. Descobrimos salas secretas, cofres abarrotados, galerias escondidas sob o palácio. Uma fortuna incalculável, tão grande que nem mesmo três reinados dariam conta de gastar.

E para quê? Não era para fortalecer o reino, não era para construir pontes ou escolas, nem para proteger nossas fronteiras. Era para se empilhar ouro sobre ouro, moedas sobre moedas, apenas para o prazer de possuir. O senhor não guardava para o povo, guardava de nós.

O trono não é um cofre, Majestade. A coroa não é uma senha de acesso à riqueza. O rei é um guardião, não um acumulador. Mas vosmecê confundiu seu dever com seu desejo, e seu desejo se tornou maior do que a própria coroa.

Hoje o julgamento é público, e a sentença, irrevogável. Não é só o ouro que será devolvido ao reino; o senhor também devolverá sua vida, pois não há crime maior do que trair a confiança de todos aqueles que lhe chamavam de líder.

A forca está erguida, o carrasco espera. Que o último som que ouça não seja o tilintar das moedas, mas o eco das vozes que um dia acreditaram no senhor. Pois a justiça não mede riqueza — mede caráter, e o seu foi vendido pelo peso do ouro.
${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por raiva do povo em relação a confiança com ele`
        vida = false
    }
    else if (povo >= 20){

        text = text+`${arrayNum2[7]}: — Majestade… até ontem, se alguém ousasse levantar um dedo contra o senhor, seria chamado de louco. O povo o amava, o reverenciava, acreditava que sua palavra era lei e seu coração, puro.

E por um tempo, eu também acreditei. Eu o vi sorrir nas festas, caminhar entre os camponeses, abraçar crianças, prometer dias melhores. O senhor construiu a imagem perfeita: um rei que não se afasta do seu povo.

Mas, Majestade… quanto mais perfeita a máscara, mais perigosa é a verdade que ela esconde.

Eu observei de perto. Vi como cada aparição pública era cuidadosamente calculada, como cada gesto generoso coincidia com acordos que ninguém via, como cada sorriso abria portas para negócios que beneficiavam poucos e mantinham muitos na sombra.

O senhor não precisava governar pela força, porque governava pela ilusão. Enquanto o povo o aplaudia, não via as cartas sendo jogadas por baixo da mesa. O senhor fez da confiança uma moeda, e gastou-a para comprar silêncio e complacência.

Hoje, não estamos aqui porque o senhor falhou em nos agradar. Estamos aqui porque o senhor nos traiu com um disfarce tão convincente que até os mais sábios se ajoelhavam diante dele. E isso, Majestade, é pior que a tirania aberta: é a tirania mascarada de bondade.

O povo que lhe entregou o coração agora exige sua cabeça. A praça está cheia, não de inimigos declarados, mas de ex-devotos que descobriram que o seu rei perfeito era, na verdade, um mestre das sombras.

A coroa não cairá no chão; ela será arrancada com as próprias mãos daqueles que a sustentaram. E quando o carrasco puxar a corda, não será apenas o seu corpo que cairá… mas o mito que o senhor construiu.
${personagemAtual}: OQUE?!`
        final = final+`${personagemAtual} morreu por invasão do povo por supostamente criar uma imagem de santo`
        vida = false
    }

    return text
}

function verificarSitDeVida(){
    if(vida){

    }
    else{
        alert(""+sistemaVerificarSituacao(exercito, igreja, riquesa, povo))
        alert(""+final)
        divGame.style.display = "none";
        document.body.style.backgroundImage = 'url("../diversos/imagens/fundoFimDeJogo.png")';
        botaoRestart.style.display = "block";
        nameGameOverPag.style.display = "block";
    }
}

//-------------------------Local do start-----------------------------

function sistemaDeVerifStart(){

    if(verifStart){
        divGame.style.visibility="visible";
        fundoP.style.visibility="visible";
    }
    else{
        divGame.style.visibility="hidden";
        document.body.style.backgroundImage = 'url("../diversos/imagens/fundoNuvensStart.png")';
    }
}

function sistemaFalasForMDT(){

        if(verifSitDeFalas === 0) {
            setTimeout(function () {
                falasMDT.innerText = "Haa... você... que bom velo... " +
                    "bem... acredito que deve me conhecer não? se não conhece... eu vou lhe diser! " +
                    "sou o Mestre Do Tempo o guardiao de todos um dos maiores deuses de todos os tempos... " +
                    "bem... acho que agora voce já me conhece... mas agora...";

            }, 1)


            setTimeout(function () {
                imgMDT.src = "../diversos/imagens/MestreDoTempoLado.png"
                falasMDT.innerText = "QUAL SERIA O SEU NOME? " +
                    "poderia me dizer colocando o nome ali do lado... "
                informNamePag.style.display = "block"
                digNamePag.style.display = "block"
                botaoConfirm.style.display = "block"

            }, 6000)

        }
        else if(verifSitDeFalas === 1) {
                    setTimeout(function () {
                    imgMDT.src = "../diversos/imagens/MestreDoTempoParado.png"
                    falasMDT.innerText = "Ahh.. hmm. sim.. " + digNamePag.value + " seu nome parece familiar.."
             }, 1)

            setTimeout(function () {
                imgMDT.src = "../diversos/imagens/MestreDoTempoPreparado.png"
                falasMDT.innerText = "Hahaha bem... vou te mandar para a terra onde você devera " +
                    "administarr um reino inteiro, mas tome cuidado com suas açoes!"
            }, 5000)

            setTimeout(function () {
                botaoStart.style.display = "block"
            }, 6000)

        }
        else if(verifSitDeFalas === 3) {
            setTimeout(function () {
                imgMDT.src = "../diversos/imagens/MestreDoTempoRaio.png"
                falasMDT.innerText = "* Estralos de dedos *"
            }, 1)

            setTimeout(function () {
                document.body.style.backgroundImage = 'url("../diversos/imagens/fundoDeErroAnimadoMDT.gif")';
            }, 800)

            setTimeout(function () {
                invisibleStart()
                sistemaDeVerifStart()
                escolherPersonagem()
                atualizarStatus()
            }, 3000)

        }
} //sas

function invisibleStart() {
    imgMDT.style.display = "none"
    falasMDT.style.display = "none"
    nomeMDT.style.display = "none"
}
