/*
Valide as senhas 🕵️
Neste exercício você vai criar um validador de senhas. Abaixo, existe uma variável que contém a 
senha para entrar no wi-fi da casa do Juquinha. Juquinha pediu que você criasse um programa que 
verifique se a senha digitada é estritamente igual a senha escolhida para acessar o wi-fi.

Copiar
  let senhaDoWiFi = 159000;

  let senhaDigitada1 = 169000;
  let senhaDigitada2 = 159000;
  let senhaDigitada3 = '159000';
  let senhaDigitada4 = 159000;
a. Crie variáveis suficientes para testar cada uma das senhaDigitadaN:

A senha deve ser estritamente igual a senhaDoWiFi;
Compare cada uma das senhas e atribua o valor da comparação em uma variável chamada verificacaoN, 
onde N é o número da comparação;
Por último, Utilize as variáveis que você criou para adicionar o resultado da comparação, para mostrar
no console se a senha é válida ou não.
*/

let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;


let verificacao1 = senhaDigitada1 === senhaDoWiFi;
let verificacao2 = senhaDigitada2 === senhaDoWiFi;
let verificacao3 = senhaDigitada3 === senhaDoWiFi;
let verificacao4 = senhaDigitada4 === senhaDoWiFi;

console.log("Verificação da senha 1 é ",verificacao1)
console.log("Verificação da senha 1 é ",verificacao2)
console.log("Verificação da senha 1 é ",verificacao3)
console.log("Verificação da senha 1 é ",verificacao4)
