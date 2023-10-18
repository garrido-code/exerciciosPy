#Maiúscula e minuscula
#Simbolos e espaços

"""
Security = chave
5ecurt1ty= senha
"""

chave = input('Digite a sua palavra para gerar a senha: ')

senha = ""

for letra in chave:
    if letra in "Aa":
        senha = senha + "0"
    elif letra in "Bb":
        senha = senha + "2"
    elif letra in "Cc":
        senha = senha + "3"
    elif letra in "Dd":
        senha = senha + "4"
    elif letra in "Ff":
        senha = senha + "5"
    elif letra in "Ee":
        senha = senha + "6"
    elif letra in "Jj":
        senha = senha + "7"
    elif letra in "Gg":
        senha = senha + "8"
    elif letra in "Qq":
        senha = senha + "@"
    elif letra in "Ss":
        senha = senha + "%"
    elif letra in "Uu":
        senha = senha + "?"
    elif letra in "Ii":
        senha = senha + "*"
    elif letra in "Oo":
        senha = senha + "$"
    elif letra in "Vv":
        senha = senha + "&"
    elif letra in "Tt":
        senha = senha + "!"
    else: senha = senha + letra
print(senha)
 