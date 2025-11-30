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

    espirito,
    arcebispo,
    general,
    freira,
    rex,
    conselheiro,
    lula,
    diabo,
    portaDupla,
    porta,
    salaBau,
    portaChefe,
    portaChefao,
    malenia,
    godfrey,
    morgott,
    radahn,
    mohg,
    maliketh
    
]

let nomeP = document.getElementById("nomePers")
let fotoP = document.getElementById("fotoPers")
let fundoP = document.getElementById("imgFundoId")
let musicaP = document.getElementById("musicaPers")

let botaoLeft = document.getElementById("btEscolhaLeft")
let botaoRight = document.getElementById("btEscolhaRight")

let igrejaPag = document.getElementById("igreja")
let riquesaPag = document.getElementById("riquesa")
let exercitoPag = document.getElementById("exercito")
let povoPag = document.getElementById("povo")
let anoPag = document.getElementById("ano")
let nomeReiPag = document.getElementById("nombreRei")

let igreja = 10
let riquesa = 10
let exercito = 10
let povo = 10
let ano = 515

let sistemEscolha = 0
let aleatorio = 0

escolherPersonagem();

botaoLeft.addEventListener("click", function(){
    decissaoDoReiLeft()
    localStorage.clear()
})

botaoRight.addEventListener("click", function(){
    decissaoDoReiRight();
    localStorage.clear()
})

function escolherPersonagem() {

    let salvo = localStorage.getItem("personagemSalvo");

    if (salvo != null) {
        personagemEscolhido(Number(salvo));
    } else {
        sistemEscolha = 0
        aleatorio = Math.floor(Math.random()*10);
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
