/*Encontre a classe do personagem 🧙‍♀️
Imagine que em uma partida de RPG (Role-playing game) você deve jogar um dado de 20 lados (D20) 
para determinar a classe de um personagem, ou seja, de acordo com o número sorteado pelo dado uma 
classe será escolhida. Considere as regras a seguir:

Número menor que 4 = Guerreiro(a);
Número maior ou igual a 4 e menor que 8 = Ladino(a);
Número maior ou igual a 8 e menor que 12 = Curandeiro(a);
Número maior ou igual a 12 e menor que 16 = Arqueiro(a);
Número maior ou igual a 16 = Feiticeiro(a);
Crie um algoritmo que informa a classe escolhida de acordo com o número sorteado 
pelo dado de 20 lados e atribua o resultado na variável resultado.

Use condicionais para salvar a classe correta na variável classe;

A mensagem na variável resultado deve ser como essa: 'Sua classe é: Arqueiro(a)'.

Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

Copiar
let dadoNumero = 16;
let classe = '';
let resultado = ''; */

    let dadosNumero = 4;
    let classe = '';
    let resultado ='';

    if (dadosNumero <= 4)
    {
        classe = "Guerreiro"
    }
    else if (dadosNumero >= 4 && dadosNumero < 8 )
    {
        classe = "Ladino(a)"
    }
    else if (dadosNumero >= 8 && dadosNumero < 12)
    {
        classe = "Curandeiro(a)"
    }
    else if (dadosNumero >= 15 && dadosNumero < 16)
    {
        classe = "Arqueiro(a)"
    }
    else
    {
        classe = "Feiticeiro(a) "
    }

    resultado = 'Sua classe é: ' + classe;
    console.log(resultado)
