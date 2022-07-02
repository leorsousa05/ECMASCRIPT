// Rest Params

/* Com Rest Params podemos pegar items
de uma array ou objeto e printar elas
de forma que não apareça a array(os
colchetes e aspas) e apareça apenas
o item unicamente como uma string. */

/* Da seguinte maneira passamos no
parâmetro da função o spread operator
que faz a desestruturação e printamos */

function bonsLivros(mensagem, ...livros) {
    livros.forEach(livro => console.log(`${mensagem}: ${livro}`))
}

/* Dessa maneira a gente pode chamar a função e ao invés
de usarmos os colchetes para passar cada livro da array
livros que ficaria dessa forma */

//         String Mensagem              Array dos livros
bonsLivros("olá, tudo bem", ["Harry Potter", "Os dois morrem no final"])

/* Agora podemos passar da seguinte forma */
bonsLivros("olá, tudo bem", "Harry Potter", "Os dois morrem no final")

/* Dessa maneira, cada string após o primeiro parâmetro,
irá ser colocada dentro da array livros, e logo após
o Spread Operator vai desestruturar e printar elas
unicamente como uma string.  */