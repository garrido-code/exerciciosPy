/**Exercícios
Verifique o intervalo entre números: será que é par? 🤔
Neste exercício você vai desenvolver um programa que verifica se um número está no intervalo entre 20 e 50 e se 
o número é par. Abaixo existe uma variável com o número a ser verificado:

Copiar
  let numero = 30;
a. Você precisa:

verificar se a variável numero é maior ou igual a 20 e menor ou igual a 50, e se o valor contido nela é par;
criar uma variável chamada resultado e atribuir o resultado da verificação a ela;
fazer um console.log do resultado. */

let numero = 30;
let resultado = numero >= 20 && numero <= 50 && numero % 2 == 0;
console.log(resultado)