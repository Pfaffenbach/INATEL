const Calculadora = require('./src/calculadora');

let soma = Calculadora.soma(1, 2);
console.log(soma);

let sub = Calculadora.subtracao(1, 2);
console.log(sub);

let mult = Calculadora.multiplicacao(3, 2);
console.log(mult);

let div = Calculadora.divisao(4, 2);
console.log(div);

let divres = Calculadora.restoDiv(7, 3);
console.log(divres);