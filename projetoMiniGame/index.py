"""
    do while
    codigo advinhe um  numero
"""

palpite = 0
numero = 9

while bool(palpite) is True:
    print(" Qual o numero correto ?")
    palpite = int(input(""))
    if palpite == numero:
        print("Parabéns vc acertou")
        break
    else:
        print("você errou")
else:
    print(" Erro  na aplicação ")
