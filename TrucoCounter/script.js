var pontosA = 0
var pontosB = 0


function publicarNome(){
    var nomeA = nomeEquipe1.value
    var nomeB = nomeEquipe2.value

    Nome1.innerHTML = nomeA
    Nome2.innerHTML = nomeB

    inicio.style.display = "none"
    contador.style.visibility = "visible"
}

function add1E1(){
    pontosA += 1
    pontos1.innerHTML = pontosA
    validar()
}
function add1E2(){
    pontosB += 1
    pontos2.innerHTML = pontosB
    validar()
}
function add3E1(){
    pontosA += 3
    pontos1.innerHTML = pontosA
    validar()
}
function add3E2(){
    pontosB += 3
    pontos2.innerHTML = pontosB
    validar()
}
function add6E1(){
    pontosA += 6
    pontos1.innerHTML = pontosA
    validar()
}
function add6E2(){
    pontosB += 6
    pontos2.innerHTML = pontosB
    validar()
}
function add9E1(){
    pontosA += 9
    pontos1.innerHTML = pontosA
    validar()
}
function add9E2(){
    pontosB += 9
    pontos2.innerHTML = pontosB
    validar()
}
function add12E1(){
    pontosA += 12
    pontos1.innerHTML = pontosA
    validar()
}
function add12E2(){
    pontosB += 12
    pontos2.innerHTML = pontosB
    validar()
}

function validar(){
    if(pontosA >= 11){
        contador.innerHTML = `Equipe ${Nome1.innerHTML} venceu, parabéns!!`
    }
    else if(pontosB >= 11){
        contador.innerHTML = `Equipe ${Nome2.innerHTML} venceu, parabéns!!`
    }
}