// Modulos Javascript

/* Para podermos usar modulos, usamos o nodeJS e
o gerenciador de pacote do mesmo, o npm(Node Package Manager) */

/* Você pode baixar usando o seguinte link: */

// https://nodejs.org/en/download/

/* Aqui instalamos um modulo chamado chalk.
Usado para colocar uma cor de background em
um terminal. */

/* Você pode baixa-lo usando o seguinte comando: */

// npm install chalk
//     OR
// npm i chalk

/* Para importarmos um modulo Javascript via Node
utilizamos o seguinte: */
//  import nomeDoModulo from 'arquivo-do-modulo'
    import chalk from 'chalk'

console.log(chalk.bgBlue("Hello World!"))

