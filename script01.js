//Entrada
let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));

//Processamento
let adicao = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

//Saída
console.log(
  "O resultado da adição é: " +
    adicao +
    "\nO resultado da subtração é: " +
    subtracao +
    "\nO resultado da multiplicação é: " +
    multiplicacao +
    "\nO resultado da divisão é: " +
    divisao
);
