// OPERADOR SPREAD
/* O operador spread é usado para 
"desenpacotar" uma array. Pra fazermos
isso, precisamos criar a array.
(obviamente!).  */
let amigos = ["Guilherme", "André", "Feitosa"]

/* Após criarmos a array, nós costumamos
printar a array da seguinte maneira: */
console.log(amigos);

/* Dessa maneira não está errada, mas
dessa maneira você está mostrando toda
array, inclusive o colchetes, as vírgulas
separando cada item e etc. */

/* Para desempacotar uma array do jeito
Old-School fariamos da seguinte maneira: */
console.log(amigos[0], amigos[1], amigos[2]);

/* Assim irá aparecer todos os nomes, mas
dessa maneira é muito extensa e requer tempo,
então podemos usar a seguinte maneira: */
console.log(...amigos)

/* Colocando os 3 pontos atrás desempacotamos
a nossa array, e ela é mostrada como se cada
item fosse uma string única, como se tivessemos
usada a maneira acima dessa para desenpacotar
a nossa array. */

/* Podemos também usar isso para adicionar
items a array */
let novoAmigo = [...amigos, "Felipe"]

/* Dessa maneira, colocamos o Felipe na
última casa da array e adicionamos sem ter
que usar o .push(), dessa forma, nós
criamos uma array nova chamada novoAmigo
e logo após desempacotamos a array amigos
dentro da nossa nova array, e adicionamos
no final da nossa array o nome "Felipe". */

console.log(...novoAmigo)

// DESEMPACOTANDO ARRAYS PARA UMA FUNÇÃO

/* Desempacotando para uma função é simples,
se temos já dentro de uma array oque queremos
passar como parâmetro da função, ao invés
de reescrever ou especificar o lugar do
item na array, podemos simplesmente
desempacotar a array. */

function soma(num1, num2) {
    return num1 + num2
}

let numeros = [17, 21]

console.log(soma(...numeros))

/* Dessa maneira criamos uma função que
faz uma soma pra nós, e colocamos os
numeros que vamos somar, dentro de uma
array. Logo após chamamos a função soma
dentro de um console.log() para poder
printar na tela e desempacotamos a nossa
array. */

/* Tendo assim o nosso grande e esperado
resultado */

// USANDO SPREAD OPERATOR AO INVÉS DE PUSH:
/* Podemos também usar o spread operator
para colocar algo dentro de uma array
Por Exemplo: */

/* Da forma Old School, fariamos da seguinte
maneira: */
let pokemons = ["Pikachu", "Charmander", "Squirtle", "Bulbassauro"]

pokemons.push("Charizard")
pokemons.push("Blastoise")
pokemons.push("Ivysaur")

console.log(...pokemons)

/* Mas podemos o usar os novos formatos do
ECMASCRIPT: */

let pikachu = ["Normal", "Eletrico"]

pikachu = [...pikachu, "Aço"]

console.log(pikachu)
console.log(...pikachu)

/* Também podemos fazer com objetos */

let pokemon = {
    nome: "Pikachu",
    tipo: ["Normal", "Elétrico"],
}

pokemon = {...pokemon, hp: 60}

let {nome, tipo, hp} = pokemon

console.log(`Nome: ${nome}, Tipo: ${tipo}, Vida: ${hp}`)

