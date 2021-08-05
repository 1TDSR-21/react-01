// Função Padrão
function adicao(a,b){
    return a + b
}

//Arrow-Function
const subtracao = (c,d) =>{
    return c - d
}

//Arrow-Function
const multiplicacao = (e,f) => e * f

//Arrow-Function
const msg = () => {
    console.log("Voltamos!")
    return "Voltamos!"
}


// Executar a função e a apresentar o valor.
console.log("Resultado da adição => " + adicao(10,10))
console.log("Resultado da subtração => " + subtracao(25,15))
console.log("Resultado da multiplicação => " + multiplicacao(10,10))

function msg2(){
    console.log("Mensagem!!")
    return "Menssagem!"
}

const botao = document.querySelector('#meuBotao')
const botao2 = document.querySelector('#meuBotao2')


botao.style.backgroundColor = '#fff'
botao2.style.backgroundColor = '#4444'

botao.addEventListener('click',msg)
botao2.addEventListener('click',msg2)