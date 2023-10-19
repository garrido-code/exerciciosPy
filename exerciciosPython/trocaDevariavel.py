"""
Exercicio - trovca de variáveis 
"""
#troca de variaveis 

x = input("Insira o valor X: ")
y = input("Insira o valor Y: ")

# criareos uma variavel temporaria 

temp = x 
x = y
y = temp

print("O valor de x depois da troca: {}".format(x))
print("O valor de Y depois da troca: {}".format(y))

