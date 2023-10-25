/*
Utilize o operador lógico correto: feliz ou triste? 🎭
Abaixo existem duas variáveis, uma se chama local e a outra estadoEmocional:

Copiar
let local = 'praia';
let estadoEmocional;
A variável local representa o lugar em que a pessoa está no momento;
A variável estadoEmocional representa qual o estado emocional da pessoa ao estar nesse local;
Crie uma lógica para saber o valor de estadoEmocional:

O valor da variável estadoEmocional deve ser uma verificação se o valor da variável local for igual a 
praia OU a variável local seja igual a cinema;
*/

let local = 'praia';
let estadoEmocional = local === 'praia' || local === 'cinema' ;

console.log(estadoEmocional)
