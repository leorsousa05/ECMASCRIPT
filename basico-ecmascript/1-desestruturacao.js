// DESESTRUTURAÇÃO DE OBJETOS

/* Para começar a desestruturar um objeto
nós vamos declarar ele primeiro. */

let livro = {
    nome: "Harry Potter",
    dataDeLancamento: 2004,
    avaliacao: "Péssimo"
}

/* Dessa maneira já temos nosso objeto que
é um livro do Harry Potter, vamos desestru-
turar esse objeto agora. */

/* A forma que mais usamos é a seguinte: */
/* 
let nomeDoLivro = livro.nome
let dataDelancamento = livro.dataDeLancamento
let avaliacao = livro.avaliacao
*/
/* Essa maneira é bem extensa mas serve
de qualquer jeito. Mas podemos utilizar
as novas funções do ecmascript pra faci-
litar isso. */

/* Dessa seguinte maneira pegamos o nome do
livro e colocamos em uma variável e não só
isso, colocamos a data e avaliação do livro
dentro de uma variável, mas ao invés de escre-
ver o nome da váriavel, colocamos o próprio nome
que tinha no objeto. */

let { nome: nomeDoLivro, dataDeLancamento, avaliacao } = livro

console.log(nomeDoLivro, dataDeLancamento, avaliacao)


// DESESTRUTURAÇÃO DE ARRAYS

/* Funciona quase da mesma forma pra arrays, vamo dar uma olhada. */
/* Primeiro criamos a array */
let celular = ["Samsung", "Motorola", "Apple", "Asus"];

/* Logo após desestruturamos com os novas funções do ECMAScript 8 */

/* Da mesma maneira, colocamos no lugar que a váriavel recebe algo o lugar onde vem cada item da lista.*/
/* As váriaveis atribuem valores dos itens da array na sequência, ou seja, a variável Asus ali, não está
Recebendo o celular "Asus" como item, ele está recebendo celular "Apple" como item por quê ele vem em
sequência. */

// let [Samsung, Motorola, Asus] = celular

/* console.log(Samsung, Motorola, Asus) */

// DESESTRUTURAÇÃO DE ARRAYS EM FUNÇÕES
/* Pra fazer isso, criamos uma função que vai ler as marcas de celular */

/* Dentro da function colocamos o colchetes, que indica a desestruturação: */
function lerMarcasDeCelular([Samsung, Motorola, Apple]) {
    console.log(Samsung, Motorola, Apple)
}

/* Então chamamos a função e passamos os parâmetros dela: */
/* O parâmetro da função, é sempre a Array, pra que assim
aconteça a desestruturação. */
lerMarcasDeCelular(celular)