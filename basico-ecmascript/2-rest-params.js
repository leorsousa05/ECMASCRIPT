// Rest Params

/* Em alguma forma, alguma hora queremos
simplesmente ler uma array e printar cada
item que tem nela, individualmente. Mas
a forma Old-School que sempre usamos é a
mais díficil e complicada, perdemos
tempo fazendo ela por ela ser simplesmente
gigante. A forma Old-School de faze-la
seria assim. */

function bonsLivros(mensagem, livros) {
    livros.forEach(livro => console.log(`${mensagem}: ${livro}`))
}

/* Aqui criamos uma função que mostra os bons
livros, uma mensagem e o nome do livro.
Então para cada livro dentro da array livros
a gente dá um console.log() apresentando o
livro. */

bonsLivros("Esse livro é o:", ["Principe da Persia", "Como eu era antes de você", "A Culpa é Das Estrelas"])

/* Então aqui chamamos a função, e dentro da
função colocamos um array com oque vai
aparecer na tela. */

/* Essa função é gigante, e escrevendo ela
inteira é super devagar e toma um tempo 
desnecessário. Olha só: */

function nomesBonitos(mensagem, nomes) {
    nomes.forEach(nome => console.log(`${mensagem}: ${nome}`))
}

nomesBonitos("Esse nome é um nome bonito", ["André", "Leonardo", "Mel", "Guilherme"])

/* Viu? Toma muito tempo e linhas. */
/* Para facilitar-mos usando Rest Params
na array, podemos colocar o mesmo comando
que o spread operator. */

function pessoasBonitas(mensagem, ...pessoas) {
    pessoas.forEach(pessoa => console.log(`${mensagem}: ${pessoa}`))
}

/* Usando o Rest Params, a gente só declara
a mensagem primeiro que é a ordem do parâmetro
da nossa função, e logo após tudo que estiver
depois de mensagem vai virar item da array
pessoas. */

pessoasBonitas("Essa pessoa bonita é chamada", "Leonardo", "Mel", "Eduardo")
