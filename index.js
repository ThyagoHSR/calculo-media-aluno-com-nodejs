const chalk = require('chalk');
const minimist = require('minimist');
const notaAluno = require('./Nota').notaAluno;
const args = minimist(process.argv.slice(2));
const Nota1 = parseInt(args['Nota1']);
const Nota2 = parseInt(args['Nota2']);


const notaTotal = notaAluno(Nota1, Nota2);  // Just use the parsed values directly

if (isNaN(notaTotal)) {

    console.log(chalk.bgRed("Entradas inválidas! Por favor, insira números válidos."));
}
 else if (notaTotal >= 6) {

    console.log(chalk.bgGreen.white(`Sua nota foi ${notaTotal}, Parabéns!, Você está Aprovado!`));
}
 else {
    console.log(chalk.bgRed(`Sua nota foi ${notaTotal}, Desculpe!, Você foi Reprovado!`));
}
