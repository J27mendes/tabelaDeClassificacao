var afogados = {
  clube: "Afogados",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var central  = {
  clube: "Central",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos:  0
}

var nautico = {
  clube: "Naútico",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var retro = {
  clube: "Retrô",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var salgueiro = {
  clube: "Salgueiro",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var santacruz = {
  clube: "Santa Cruz",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var setedesetembro = {
  clube: "Sete de Setembro",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var sportrecife = {
  clube: "Sport Recife",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var veracuz = {
  clube: "Vera Cruz",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}

var vitoria = {
  clube: "Vitória",
  vitorias: 0,
  empates: 0,
  derrotas : 0,
  pontos: 0,
}


afogados.pontos = calculaPontos(afogados)
central.pontos = calculaPontos(central)
nautico.pontos = calculaPontos(nautico)
retro.pontos = calculaPontos(retro)
salgueiro.pontos = calculaPontos(salgueiro)
santacruz.pontos = calculaPontos(santacruz)
setedesetembro.pontos = calculaPontos(setedesetembro)
sportrecife.pontos = calculaPontos(sportrecife)
veracuz.pontos = calculaPontos(veracuz)
vitoria.pontos = calculaPontos(vitoria)


function calculaPontos(equipe){
  var pontos = (equipe.vitorias * 3) + equipe.empates
  return pontos
}

var clube = [afogados, central, nautico, retro, salgueiro, santacruz, setedesetembro, sportrecife, veracuz, vitoria]

exibirClubesNaTela(clube)

function exibirClubesNaTela(clube){
  var html = ""
  for(var i = 0; i < clube.length; i++){
    html += "<tr><td>" + clube[i].clube + "</td>"
    html += "<td>" + clube[i].vitorias + "</td>"
    html += "<td>" + clube[i].empates + "</td>"
    html += "<td>" + clube[i].derrotas + "</td>"
    html += "<td>" + clube[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitórias</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empates</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrotas</button></td></tr>" 
  }
 var tabelaClubes = document.getElementById("tabelaClubes")
 tabelaClubes.innerHTML = html
 }

  function adicionarVitoria(i){
    var equipe = clube[i]
    equipe.vitorias++
    equipe.pontos = calculaPontos(equipe)
    exibirClubesNaTela(clube)
}

  function adicionarEmpate(i) {
    var equipe = clube[i]
    equipe.empates++
    equipe.pontos = calculaPontos(equipe)
    exibirClubesNaTela(clube)
}

  function adicionarDerrota(i) {
    var equipe = clube[i] 
    equipe.derrotas++
    exibirClubesNaTela(clube)
}

//Incluir uma imagem na linha de cada jogador;
//Um botão que adiciona um novo jogador na tabela de classificação.