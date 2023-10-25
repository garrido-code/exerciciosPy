/*Analise o login e a senha: a credencial está correta? 🧑‍💻
Utilize as variáveis abaixo para escrever um programa que analisará o login e a senha de uma pessoa usuária:

Copiar
  let login = 'joabCassimiro';
  let senha = '12345678';
a. Você deve verificar se as credênciais estão corretas:

Crie uma variável que conterá o resultado da verificação, dê a ela o nome de verificaCredenciais;
Compare se a variável login é estritamente igual a joabCassimiro e se a variável senha é estritamente igual a 12345678;
Atribua o retorno da comparação à variável verificaCredenciais.
Imprima no console o resultado da comparação.
*/

let login = 'joabCassimiro';
let senha = 12345678;

let verificaCredenciais = login === "joabCassimiro" && senha === 12345678;

console.log(verificaCredenciais)