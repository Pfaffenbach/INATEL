nome = input('Qual seu nome? ')
media = int(input('Qual sua média? '))

dados = {'nome': nome ,'media': media}

if media >59:
    dados['Situação'] = 'AP'
if media < 60:
    dados['Situação'] = 'RP'

print('Nome:',dados['nome'],'|', 'Media:', dados['media'],'|', 'situação:', dados['Situação'])