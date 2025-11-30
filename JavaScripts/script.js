let igreja = 10 // se chegar a 20 pode acontecer algo e se abaixa a té 0 também.
let riquesa = 10
let exercito = 10
let povo = 10

let final = ""
let sistemEscolha = 0
let vida = "vivo" // mudar para vivo (depois)
let personagemAtual = ""
let ano = 1651
let reinado = 0
let arrayNum2 = [
  "O Espírito dos Caídos",
  "Arcebispo",
  "General Conventon",
  "Irmã Júlia",
  "Rex",
  "Senhor Gotfried",
  "Luis Inácio",
  "Briggs"
]

personagemAtual = "Jaime II"
//----------------------------------
const imgs = [
    "../diversos/imagens/dia.jpg"
]
let body = document.body
let botao = document.getElementById("botao")

botao.addEventListener("click", acaon)
function acaon(){
    body.style.backgroundImage = `url('${imgs[0]}')`

}

//----------------------------------

let pularHistoria = prompt ("[1] > Nao pular < \n" +
  "[2] pular \n" +
  "Digite:")
if(pularHistoria == 1) {
  alert(`Carlo II acabou de morrer. Agora tu, Jaime Francisco Eduardo, \n" +
    "será o novo rei da Inglaterra, nosso ${personagemAtual}.`)

  alert("Lembre-se: \n" +
    "Tu tem muitas responsabilidades pela frente. \n" +
    "Terá um povo para proteger e ajudar nos momentos difíceis.\n" +
    "Um exército para defender o seu reino e conquistar terras que apresentam ameaças.\n" +
    "Um grupo cristão que vai representar boa parte do poder do seu reino.\n" +
    "E terá o seu dinheiro que virá de ações lucrativas, e será investido em seu reino.\n" +
    "Todos devem ser olhados com atenção, não fortaleça demais, e não deixa muito enfraquecido,\n" +
    "se não, haverá consequências horríveis. \n" +
    "\t")
}
else{
  alert("Historia pulada!");
}
alert("    REIGNS \n" +
  "Game Of Thrones")
alert(`${arrayNum2[0]}: Bem-vindo ${personagemAtual}! Agora é sua vez de ser responsável. Eu errei no meu mandato,
                              mas acredito que tu vai mudar esse reino para melhor. Boa Sorte. UUUUUHHHHHHHH`)
//------------------------------------------------------------------------------------
let exit = 0
let exit2 = 0
let exit4 = 0
let acao = ""
do{
  do{
    alert( sistemaVerificarSituacao(exercito, igreja, riquesa, povo) )
    sistemaDeVelhice(reinado)
    verificar(vida)
    escolha(acao)

  }while(exit != 1)

  exit = 0
  exit4 = 0
  do{
    alert("[MestreDoTempo] - Vejo que nao conseguiu manter por muito tempo.. bem quer ir de novo? ")
    let escolha2 = prompt("[S] - Sim \n" +
      "[N] - Nao \n" +
      "Digite:")

    if(escolha2.toUpperCase() == "S"){

      alert("[MestreDoTempo] - O Último rei não foi muito bom em cuidar de seu reino, bem.. te concedo outra chance, mas em outro corpo \n" +
        "[ Escolha o nome de seu novo personagem (Crie um nome)]")

      let exit3 = 0
      let nomePersonagem
      while(exit3 != 1){
        nomePersonagem = prompt("Digite:")

        if(nomePersonagem.toLowerCase() == "mestredotempo"){
          alert("[MestreDoTempo] - Você tentou usar o meu nome.. Haha.. nao faça isso..")
        }
        else{
          exit3 = 1
        }
      }
      personagemAtual = ""+nomePersonagem

      vida = "vivo"

      igreja = 10
      riquesa = 10
      exercito = 10
      povo = 10
      final = ""
      reinado = 0

      exit4 = 1

    }
    else if(escolha2.toUpperCase() == "N"){
      alert("[MestreDoTempo] - Vejo que quer sair.. nao posso fazer nada a respeito.. adeus..")
      exit4 = 1
      exit2 = 1
    }
    else{
      alert("[MestreDoTempo] - Haha.. isso nao me parece estar certo..")
    }

  }while(exit4 != 1)

}while(exit2 != 1)
//------------------------------------------------------------------------------------
// SISTEMA QUE VERIFICA SE ESTA MORTO E O MENU
function verificar(ver){
  if(ver.toUpperCase() == "MORTO"){
    alert(final)
    exit = 1
    acao = ""
  }
  else{
    alert("[0] > Acabar com o reinado < \n" +
      "[1] > Next < \n" +
      "[2] > Consultar instruções <\n" +
      "[3] > Ver as informações da situação do reino < \n"+
      "[x] > Creditos <")
    let sistemaAcao = prompt("Digite:")
    acao = sistemaAcao
  }
}
// SISTEMA DE ESCOLHAS DO MENU
function escolha(num){
  switch (num) {
    case "0":
      alert("[System] > Tem certeza que deseja acabar com seu reinado? <")
      let saida = prompt("[S] - Sim \n" +
        "[N] - Nao \n" +
        "Digite:")
      if (saida.toUpperCase() == "S") {
        alert("[System] Que pena.. te vejo outra hora!")
        exit = 1
      } else if (saida.toUpperCase() == "N") {
        alert("[System] Que bom! vamos voltar para o reino")
      } else {
        alert("[System] > Essa escolha é invalida! <")
      }

      break
    case "1":
      const contNumRand = Math.floor(Math.random() * (7 - 1 + 1)) + 1
      alert(sistemaAleatoriaPer(contNumRand))

      break
    case "2":
      alert("[MestreDoTempo]: Olá ahh.. ah sim! "+personagemAtual+" o rei desse reino? sim! reino.. haha.. \n"+
        "O jogo tem uma mecanica simples! utilize a opção (1) no menu para proseguir o jogo.. bem.. havera muitas decisões a serem tomadas \n"+
        "cada decisão terá uma consequencia boa ou ruin.. agora depende de você! Rei "+personagemAtual)
      break
    case "3":
      alert("-- Informações basicas (seu reino) --\n" +
        "igreja: "+igreja+"/20 \n" +
        "riquesa: "+riquesa+"/20  \n" +
        "exercito: "+exercito+"/20 \n" +
        "povo: "+povo+"/20 \n" +
        " -- +Informações -- \n" +
        "Ano: "+ano+" \n"+
        "Rei Atual: "+personagemAtual+"\n"+
        "Reinado (tempo no governo (anos)): "+reinado)
      break
    case "x":
      alert("[MestreDoTempo]: Ah olá jogador.. bem vindo aos creditos do jogo!!")
      let verificar2 = 0
      do{
        alert("--[Credito]-- \n"+
          "Programador(1) -> William Ramos Moreira \n"+
          "Programador(2) -> José Bernardo \n"+
          "\n"+
          "[System]: > Digite o numero do programador ou 0 (zero) para sair!<")
        let acaoCreditos = prompt("Digite:")

        switch(acaoCreditos){

          case "0":
            verificar2 = 1
            break
          case "1":
            alert("[William]: oii jogador, fico feliz que estege gostando do game!! ele foi baseado em um game já existente.. bem \n"+
              "acredito que o José sabe falar melhor sobre o caso, mas ok.. bem vou falar um pouco sobre mim.. \n"+
              "Sou um programador junior atualmente e também estou participando de projetos de programação.. quer saber mais sobre mim? \n"+
              "Entre em meu Github: https://github.com/williamRamosM")
            break
          case "2":
            alert("[José B.]: Oi jogadores. Esse jogo foi baseado no já existente:''REIGNS'', o qual se resumi em como é a vida de um rei\n" +
              "tendo suas responsabilidades. Esse joguinho é bem inferior ao verdadeiro, mas busca ser o mais divertido possível.\n" +
              "Sou um programador amador, mas busco fazer as coisas com carinha, e de uma forma que dê entretenimento. Além disso, quer saber mais sobre mim?\n" +
              "Entre no meu Github: https://github.com/Bernardin21")
            break
          default:
            alert("[System] > Essa opcao nao existe! <")
        }
      }while(verificar2 != 1)
      break
    case "t":
      let testx = prompt("Digite:")
      for(i = 0; i < testx; i++){
        alert(testRandom(testx))
      }
      break
    default:
      alert("[System] > Essa escolha é invalida! <")
  }
}

// SISTEMA DE PERSONAGEM ALEATORIO (ACONTECIMENTOS ALEATORIOS PARA O REINO)
function sistemaAleatoriaPer(numero) {
  sistemEscolha = 0
  let personagem = arrayNum2[numero]
  let fecharAcont = 0
  let text = ""
  const dialogoAleatorio = Math.floor(Math.random() * (5 - 1 + 1)) + 1 // trocar depois para (5)

  if (personagem == arrayNum2[1]) {

    if (dialogoAleatorio == 1) {

      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, precisamos construir uma igreja nova.`)
        sistemEscolha = prompt(`[1] - Já não temos o suficiente? (Igreja - diminuirá bastante)
                                [2] - Sim (Riquesas - diminuirá; Igreja - aumentará bastante)`)
        if (sistemEscolha == 1) {
          igreja -= 3
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          igreja += 3
          riquesa -= 2

          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculp, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 2) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, gostaria de realizar uma missa em nome do seu pai.`)
        sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Povo - aumentará; Exército - aumentará; Riquesa - diminuuirá)
                                  [2] - Sim (Igreja - aumentará consideravelmente; Povo - dimminuirá; Exército - diminuirá; Riquesa - diminuirá bastante)`)
        if (sistemEscolha == 1) {
          igreja -= 2
          povo += 2
          exercito += 2
          riquesa -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          igreja += 4
          povo -= 2
          riquesa -= 3
          exercito -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }

      }
    } else if (dialogoAleatorio == 3) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, dê-nos poder suficiente para exaltar a justiça divina
                                em seu país. O papa está pronto para pagar o preço.`)
        sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Povo - diminuirá; Riquesa - Aumentará)
                                  [2] - Sim (Igreja - aumentará bastante; Riquesa - diminuirá)`)
        if (sistemEscolha == 1) {

          igreja -= 2
          povo -= 2
          riquesa += 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {

          igreja += 3
          riquesa -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 4) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, poderia fazer com que os homens do exercito se torne mais
                                fieis?`)
        sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá; Exercito - Aumentará)
                                  [2] - Sim (Igreja - aumentará bastante; Exercito - Diminuirá pouco)`)
        if (sistemEscolha == 1) {
          igreja -= 2
          exercito += 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          igreja += 2
          exercito -= 1
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 5) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, Gostaríamos de estabelecer  um novo novo tributo para a igreja... Compartilhado com a coroa é claro`)
        sistemEscolha = prompt(`[1] - Não (Igreja - diminuirá bastante; povo - aumentará;)
                                  [2] - Sim (Igreja - aumentará bastante; Povo - Diminuirá; Riquesa - diminuirá bastante)`)
        if (sistemEscolha == 1) {

          igreja -= 3
          povo += 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {

          igreja += 3
          povo - 2
          riquesa -= 3
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    }
  }
  else if (personagem == arrayNum2[2]) {

      if (dialogoAleatorio == 1) {
        while (fecharAcont != 1) {
          alert(personagem + ": Opa minha chefia.. gostaria de saber se podia melhorar nossa tropa! um combate de espadas nao pode ser de madeira.. Haha..")
          sistemEscolha = prompt("[1] sim - (exercito - aumentará; riquesa - diminuirá pouco) \n" +
            "[2] nao - (exercito - diminuirá pouco;")
          if (sistemEscolha == 1) {
            exercito += 2
            riquesa -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            exercito -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 2) {
        while (fecharAcont != 1) {
          alert(personagem + ": Rei " + personagemAtual + ".. estamos precisando de mais pessoas para o exercito! se nao acabaremos como o reino do lado..")
          sistemEscolha = prompt("[1] sim - (exercito - aumentará pouco; povo - diminuirá) \n" +
            "[2] nao - (exercito - diminuirá pouco;")
          if (sistemEscolha == 1) {
            exercito += 1
            povo -= 2
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            exercito -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 3) {
        while (fecharAcont != 1) {
          alert(personagem + ":Fale meu Rei " + personagemAtual + ".. nossa tropa está com uma vontade de atacar o reino do lado.. poderia conceder?")
          sistemEscolha = prompt("[1] sim - (exercito - diminuirá; riquesa - aumentará pouco) \n" +
            "[2] nao - (exercito - diminuirá pouco; povo - aumentará")
          if (sistemEscolha == 1) {
            riquesa += 1
            exercito -= 3
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            povo += 2
            exercito -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 4) {
        while (fecharAcont != 1) {
          alert(personagem + ": Mereticimo rei " + personagemAtual + ".. nosso equipamento nao é tam sufesticado e tambem nao temos tantos homems para o exercito /n" +
            "o que acha de arrumarmos isso?")
          sistemEscolha = prompt("[1] sim - (exercito - aumentará bastante; riquesa - diminuirá; povo - diminuirá pouco) \n" +
            "[2] nao - (riquesa - aumetará pouco; exercito - diminuirá; povo - aumentará pouco")
          if (sistemEscolha == 1) {

            exercito += 3
            riquesa -= 2
            povo -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {

            riquesa += 1
            exercito -= 2
            povo += 1
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 5) {
        while (fecharAcont != 1) {
          alert(personagem + ":Venho te dizer Rei" + personagemAtual + ".. que está tendo uma uma revolta lá na igreja.. quer que acabe com isso?")
          sistemEscolha = prompt("[1] sim - (povo - diminuirá; riquesa - diminuirá pouco) \n" +
            "[2] nao - (povo - aumentara pouco; exercito - diminuirá pouco")
          if (sistemEscolha == 1) {
            povo -= 2
            riquesa -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            povo += 1
            exercito -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      }
    } else if (personagem == arrayNum2[3]) {

      if (dialogoAleatorio == 1) {
        while (fecharAcont != 1) {
          alert(`${personagem}: Senhor, sou ${personagem}, a diretora de uma das escolas.
                              Ajude-nos a cuidar de nossos infantes!`)
          sistemEscolha = prompt(`[1] - Não (Povo - diminuirá; Igreja - diminuirá)
                [2] - Sim (Povo - aumentará; Igreja - aumentará; Riquesas - diminuirá bastante)`)

          if (sistemEscolha == 1) {
            povo -= 2
            igreja -= 2
            ano++
            reinado++
            fecharAcont = 1

          } else if (sistemEscolha == 2) {
            povo += 2
            igreja += 2
            riquesa -= 3
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculp, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 2) {
        while (fecharAcont != 1) {
          alert(`${personagem}: Senhor, hoje é o seu aniversário. Gostaríamos de realizar uma festa`)
          sistemEscolha = prompt(`[1] - Aniversários não importam. (Igreja - diminui; povo diminui;)
                                [2] - Sim (Igreja - aumenta; Povo - aumenta; Riquesa - diminui)`)

          if (sistemEscolha == 1) {

            igreja -= 2
            povo -= 2
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            igreja += 2
            povo += 2
            riquesa -= 2
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculp, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 3) {
        while (fecharAcont != 1) {

          alert(`${personagem}: Senhor, a igreja não quer ajudar o povo. Por favor dê auxílio aos necessistados`)
          sistemEscolha = prompt(`[1] - Não. (Igreja - aumenta; povo - diminui bastante;)
                                [2] - Sim (Igreja - diminui bastante; Povo - aumenta; Riquesa - diminui)`)
          if (sistemEscolha == 1) {

            igreja += 2
            povo -= 3
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {

            igreja -= 3
            povo += 2
            riquesa -= 2
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 4) {
        while (fecharAcont != 1) {
          alert(`${personagem}: Senhor, os comerciantes gostariam de começar uma nova guilda e enviar um representante para a corte`)
          sistemEscolha = prompt(`[1] - Sim. (Igreja - diminui um pouco; povo diminui pouco; Exército - diminui pouco; Riquesa - aumenta bastante)
                                [2] - Não (Riquesa - diminui)`)

          if (sistemEscolha == 1) {

            riquesa += 3
            exercito -= 1
            povo -= 1
            igreja -= 1
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {

            riquesa -= 2
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else if (dialogoAleatorio == 5) {
        while (fecharAcont != 1) {

          alert(`${personagem}: Senhor, queremos realizar um evento com outros reinos, os quais tem outras religiões, a fim de gerar uma união entre eles`)
          sistemEscolha = prompt(`[1] - Não. (Igreja - aumenta; povo - diminui pouco; Exército - diminui pouco;)
                                [2] - Sim (Riquesa - diminui; Povo - aumenta; Exército - aumenta; Igreja - diminui bastante)`)
          if (sistemEscolha == 1) {

            igreja += 2
            povo--
            exercito--
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {

            riquesa -= 2
            povo += 2
            igreja -= 3
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      }

    } else if (personagem == arrayNum2[4]) {

      const sorteOuAzar = Math.floor(Math.random() * (8 - 1 + 1)) + 1

      if (sorteOuAzar >= 1 && sorteOuAzar <= 4) { // acontecimento de (Azar) <<--

        while (fecharAcont != 1) {

          alert(`${personagem}: Waufwauf! WAF! (Rex quer te levar para uma sala).`)
          sistemEscolha = prompt(`[1] - Seguir
                                [2] - Ignorar`)
          if (sistemEscolha == 1) {

            alert(`Rex te levou para a sala, onde ele te mostra um cara roubando suas joias. Depois disso,
              o ladrão taca fogo em tudo que roubou e tira a própria vida. Mesmo assim, o povo amou a atitude do cachorro`)

            riquesa -= 4
            povo += 3
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {
            alert(`${personagem} queria te levar para a sala, onde ele ia te mostra um cara roubando suas joias. Depois disso,
              o ladrão foge taca fogo em igrejas, mata 10 civis e queima tudo que roubo. Depois tira a própria vida,
              mas tendo orgulho de te colocar no prejuízo. Com isso, a segurança é aumentada`)

            riquesa -= 4
            igreja -= 3
            povo -= 3
            exercito += 5
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculp, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      } else { // acontecimento de (sort) <<--
        while (fecharAcont != 1) {

          alert(`${personagem}: Waufwauf! WAF! (Rex quer te levar para uma sala).`)
          sistemEscolha = prompt(`[1] - Seguir
                                           [2] - Ignorar`)
          if (sistemEscolha == 1) {
            alert(`${personagem} te levou para uma sala secreta que encontrou, onde tinha muito dinheiro.
            Mesmo que o povo não tenha gostado do fato de que tu quis ficar com todo o dinheiro, saiu no lucro`)

            povo -= 1
            riquesa += 4
            ano++
            reinado++
            fecharAcont = 1
          } else if (sistemEscolha == 2) {

            alert(`Provavelmente ${personagem} queria te mostra algo muito incrível, mas nunca será descoberto
            devido à sua atitude`)
            ano++
            reinado++
            fecharAcont = 1
          } else {
            alert("System: > Desculp, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
          }
        }
      }

    } else if (personagem == arrayNum2[5]) {

    if (dialogoAleatorio == 1) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, gostaríamos de construir uma escola
                            na capital para instruir o povo.`)
        sistemEscolha = prompt(`[1] - Não (Povo - diminuirá; Igreja - diminuirá)
                                 [2] - Sim (Povo - aumentará; Igreja - aumentará; Riquesa - diminuirá bastante)`)
        if (sistemEscolha == 1) {
          povo -= 2
          igreja -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          povo += 2
          igreja += 2
          riquesa -= 3
          ano++
          reinado++
          fecharAcont = 1

        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 2) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, devemos fazer alianças com outros reinos para manter-mos a soberania.
                            Eles podem acabar com o nosso reino.`)
        sistemEscolha = prompt(`[1] - Não precisa! Nós sabemos nos virar (Exército - diminuirá; Povo - aumentará;)
                                 [2] - Sim, precisamos nos manter (Povo - diminuirá bastante; Exército - aumentará; Riquesa - aumentará consideravelmente)`)
        if (sistemEscolha == 1) {

          povo += 2
          exercito -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {

          povo -= 3
          exercito += 2
          riquesa += 4
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 3) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, um reino vizinho está se fortalecendo, deveríamos atacar eles.`)
        sistemEscolha = prompt(`[1] - Sim, precisamos (Exército - diminuirá; Povo - aumentará)
                                 [2] - Não precisa! Quem teria coragem? (Povo - diminuirá; Exército - aumentará`)
        if (sistemEscolha == 1) {
          exercito -= 2
          povo += 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          povo -= 2
          exercito += 2
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 4) {
      while (fecharAcont != 1) {
        alert(`${personagem}: Senhor, a foz do Rio Pingo é perigosa para viajantes. Deveríamos limpar a região.`)
        sistemEscolha = prompt(`[1] - Sim (Riquesa - diminuirá; Povo - aumentará bastante)
                                 [2] - Não (Povo - diminuirá bastante;`)

        if (sistemEscolha == 1) {


          povo += 3
          riquesa -= 2
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {
          povo -= 3
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    } else if (dialogoAleatorio == 5) {
      while (fecharAcont != 1) {

        alert(`${personagem}: Senhor, a sua esposa é amada pelo povo. Dê poder a ela!`)
        sistemEscolha = prompt(`[1] - Sim (Exército - aumenta um pouco; Povo - aumentará)
                                 [2] - Não (Povo - diminuirá bastante; Exército - diminuirá um pouco; Riquesa - aumenta um pouco`)

        if (sistemEscolha == 1) {

          povo += 2
          exercito += 1
          ano++
          reinado++
          fecharAcont = 1
        } else if (sistemEscolha == 2) {

          povo -= 3
          exercito -= 1
          riquesa += 1
          ano++
          reinado++
          fecharAcont = 1
        } else {
          alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
        }
      }
    }
  }
  else if (personagem == arrayNum2[6]) {

        if (dialogoAleatorio == 1) {
          while (fecharAcont != 1) {

            alert(`${personagem}: Senhor, cereais estão muito baratos. Deverias ajustar o preço do pão.`)
            sistemEscolha = prompt(`[1] - Aumente um pouco. (Riquesas - aumentará)
                                [2] - Dobre! (Povo - diminuirá consideravelmente; Riquesas -aumentará estrondosamente)`)
            if (sistemEscolha == 1) {
              riquesa += 2
              ano++
              reinado++
              fecharAcont = 1

            } else if (sistemEscolha == 2) {
              riquesa += 5
              povo -= 4
              ano++
              reinado++
              fecharAcont = 1
            } else {
              alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
            }
          }
        } else if (dialogoAleatorio == 2) {
          while (fecharAcont != 1) {
            alert(`${personagem}: Senhor, O Rio Pingo está alagando, precisamos da igreja e do exército.`)
            sistemEscolha = prompt(`[1] - Sim. (Povo - Aumenta bastante; Riquesa - diminui; igreja - diminui; exercito - diminui)
                                [2] - Não. (Povo - diminuirá bastante; Riquesas - aumentará)`)
            if (sistemEscolha == 1) {
              exercito -= 2
              igreja -= 2
              povo += 3
              riquesa -= 2
              ano++
              reinado++
              fecharAcont = 1
            } else if (sistemEscolha == 2) {
              povo -= 3
              riquesa += 2
              ano++
              reinado++
              fecharAcont = 1
            } else {
              alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
            }
          }
        } else if (dialogoAleatorio == 3) {
          while (fecharAcont != 1) {
            alert(`${personagem}: Senhor, encontramos minas de ouro devemos cavar mais?`)
            sistemEscolha = prompt(`[1] - Sim. (Povo - Diminuirá; Riquesa - Aumentará muito)
                                [2] - Não. (Povo - Aumentará; Riquesa - Diminuirá pouco)`)
            if (sistemEscolha == 1) {
              povo -= 2
              riquesa += 3
              ano++
              reinado++
              fecharAcont = 1
            } else if (sistemEscolha == 2) {
              povo += 2
              riquesa -= 1
              ano++
              reinado++
              fecharAcont = 1
            } else {
              alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
            }
          }
        } else if (dialogoAleatorio == 4) {
          while (fecharAcont != 1) {
            alert(`${personagem}: Senhor, a colheita parece estar com algumas pragas como pulgoes, poderia finaciar para acabar com isso?`)
            sistemEscolha = prompt(`[1] - Sim. (Povo - Aumenta bastante; Riquesa - diminui; exercito - diminui)
                                [2] - Não. (Povo - Diminuirá bastante; )`)
            if (sistemEscolha == 1) {
              povo += 3
              riquesa -= 2
              exercito -= 1
              ano++
              reinado++
              fecharAcont = 1
            } else if (sistemEscolha == 2) {
              povo -= 3
              ano++
              reinado++
              fecharAcont = 1
            } else {
              alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
            }
          }
        } else if (dialogoAleatorio == 5) {
          while (fecharAcont != 1) {
            alert(`${personagem}: Senhor, Fomos informados que alguem de um lugar distante chamado RichardMen tentara matar nosso general.
            quer faser algo sobre isso?`)
            sistemEscolha = prompt(`[1] - Sim. (Povo - Diminuirá; Riquesa - diminui)
                                [2] - Não. (Povo - Aumentará; Exercito - Diminuirá muito)`)
            if (sistemEscolha == 1) {
              povo -= 2
              riquesa -= 1
              ano++
              reinado++
              fecharAcont = 1
            } else if (sistemEscolha == 2) {
              povo += 2
              exercito -= 4
              ano++
              reinado++
              fecharAcont = 1
            } else {
              alert("System: > Desculpa, mas não foi encontrado em nosso sistema essa opcao.. tente outra! (^_^)")
            }
          }
        }

      } else if (personagem == arrayNum2[7]) {

        if (igreja < 10 && povo < 10 && exercito < 10 && riquesa < 10) {
          text = `${personagem}: EU VIM PARA TE LEVAR ${personagemAtual}. Ai meu querido amiguinho, EU VOU ACABAR
           COM VOCÊ BELO REI, si fudeu!
           ${personagemAtual}: OQUE?!`
          vida = `morto`
          final = final + `${personagemAtual} morreu por uma captura oportunista do diabo.`

          ano++
          reinado++
        } else {
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
}
// SISTEMA DE FINAL(is) DE PERSONAGEM(S)
  function sistemaVerificarSituacao(exercito, igreja, riquesa, povo ){
    let text = ""

    if(exercito <= 0){
      text = text+`${arrayNum2[2]}: Nosso exército está muito fraco ${personagemAtual},
    o exército francês soube da nossa situção e veio nos conquistar.
    ESTAMOS MORTOS!
    ${personagemAtual}: OQUE?!`
      final = final+`${personagemAtual} morreu por invasão.`
      vida = "morto"
    }
    else if(exercito >= 20){
      text = text+`${arrayNum2[2]}: Estamos em uma situação peculiar senhor
  ${personagemAtual}, acho que o seu reinado não está muito bom, mesmo que o
  exército esteja poderoso. Eu vou fazer uma mudança nessa reino, graças aos
  investimentos que tu fez em meus homens. Foi bom ser seu general,
  bom até agora
  ${personagemAtual}: OQUE?!`

      final = final+`${personagemAtual} morreu por golpe do exército`
      vida = "morto"
    }
    else if(igreja <= 0){
      text = text+`${arrayNum2[1]}: ${personagemAtual}! COMO OUSA DESRESPEITARMOS?!
    O DIABO VIRÁ ATRÁS DE NÓS POR CULPA SUA, SE NÃO AGIRMOS RÁPIDO!
    TU VAI QUEIMAR PELO BEM DE NOSSO REINO E DEUS, QUEIME NO INFERNO!
    ${personagemAtual}: OQUE?!`
      final = final+`${personagemAtual} morreu por desespero da igreja em se proteger de alguém se importava com a ameaça do diabo`
      vida = "morto"
    }
    else if(igreja >= 20){
      text = text+`${arrayNum2[1]}: ${personagemAtual}. Nossa religião prevaleceu muito,
    agradeço pela sua colaboração, mas tu não é puro, sei de muitas
    coisas que fez reinando e até antes de reinar. Eu me declaro novo
    chefe do reino por enquanto, e irei colocar um novo rei, só que puro.
    ${personagemAtual}: OQUE?!`
      final = final+`${personagemAtual} morreu por dominância da igreja, os fazendo querer transformar o clero na predominância`
      vida = "morto"
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
      vida = "morto"
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
      vida = "morto"
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
      vida = "morto"
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
      vida = "morto"
    }

    return text
  }

  function sistemaDeVelhice(idade){

    if(idade >= 40){  // Tem que ser em 40 para ele morrer de velhice
      final = final+`${personagemAtual} morreu de velhice, considerado um rei honroso`
      vida = "morto"
    }
    else{

    }
  }
