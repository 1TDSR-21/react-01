// Função padrão
function sum(a, b) {
    return a + b
}

// Arrow function
const soma = (a, b) => a + b
    //console.log("Resultado da soma: " + soma(20, 150))

const message = () => console.log("Voltamos para o show")

// recuperando o botao com querySelector e getElementById:

// querySelector
const botao = document.querySelector("#myButton")

// getElementById
// const botao = document.getElementById("myButton")

botao.style.backgroundColor = "#fff"

// Atrelar o botão com um evento de click e um listener que fica aguardando o que acontece com o botão
// botao.addEventListener("click", message)

// para conseguirmos executar uma função com parâmetros, precisamos declarar uma função anonima conforme o caso abaixo (utilizando ArrowFunction): 
botao.addEventListener("click", () =>
    console.log("Resultado da adição disparado por evento: " + soma(20, 30))
)