//função padrão
function adicao(a,b){
    return a + b;
}

console.log("Resultado da adição: " + adicao(10,10))

//Arrow-Function
const subtracao = (c,d) =>{
    return c - d;
}

console.log("Resultado da subtração: " + subtracao(20,10))

//Arrow-Function - facilitada
const divisao = (e,f) => e/f;

console.log("Resultado da subtração: " + divisao(20,10))

//Arrow-Function - facilitada
const msg =() => "Voltamos para o Show!";
    console.log(msg())

function msg2() {
    return console.log("Mensagem NOVAAAA")
}

//recuperando o botão com querySelector e getElementById
//querySelector
const botao = document.querySelector('#meuBotao')

//getElementById
//const botao = document.querySelector('meuBotao')

//alterando a cor de fundo do botão
//botao.style.backgroundColor = '#fff'

//Atrelar ao botão um evento de click e utilizando função anônima padrão
//botao.addEventListener('click', msg2)

//Atrelar ao botão um evento de click e utilizando função anônima Arrow
botao.addEventListener('click', ()=> console.log("Resultado da Adição disparado por evento: " + adicao(30,10)))