const chalk = require('chalk')

const nota = 10;

if( nota >= 6){
    console.log(chalk.bgGreen.white(`Sua nota foi ${nota}, Parabéns!, Você está Aprovado!`));
}
else{
console.log(chalk.bgRed(`Sua nota foi ${nota}, Desculpe!, Você foi Reprovado!`));
};

