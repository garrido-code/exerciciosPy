print('calculadora de desconto'.capitalize())

produto = input('Digite o nome do produto: ')
valor = float(input('Digite o valor do produto: '))
desconto = float(input('Digite o valor do desconto: '))

valorComDesconto = (valor * desconto) / 100

print("o valor do {} como o desconto de {}% ficou no valor de R${}".format(produto,desconto,valorComDesconto))