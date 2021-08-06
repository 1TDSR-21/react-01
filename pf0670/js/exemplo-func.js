

//Função Padrão
function adicao(a,b){
    return a+b
}
//Executar a função e apresentar o valor.
console.log("Resultado da Adição : " + adicao(10,10))

//Arrow-Function
const subtracao = (c,d) =>{
        
    return c-d
}
//Executar a função e apresentar o valor.
console.log("Resultado da Subtração : " + subtracao(10,5))

//Arrow-Function-facilitada
const divisao = (e,f) => e/f
//Executar a função e apresentar o valor.
console.log("Resultado da Divisão : " + divisao(6,2))

//Arrow-Function-facilitada
const msg = () => {
    console.log("Voltamos!")
    return "Voltamos!"
}

//Executar a função e apresentar o valor.
//console.log(msg())

function msg2(){
    console.log("Mensagem!!")
    return "Mensagem!"
}

//console.log(msg2())

//Recuperando o botão com querySelector e getElementById
//querySelector
const botao = document.querySelector('#meuBotao')
//getElementById
//const botao = document.getElementById('meuBotao')
//Alterando a cor de fundo do botão.
botao.style.backgroundColor = '#fff'

//Atrelando ao botão um evento de click e utilizando função anônina padrão.
// botao.addEventListener('click',function(){
//     console.log("Resultado da Adição disparado por evento: " + adicao(30,10))
// })

//Atrelando ao botão um evento de click e utilizando função anônina Arrow.
botao.addEventListener('click',()=> console.log("Resultado da Adição disparado por evento: " + adicao(30,10)))
