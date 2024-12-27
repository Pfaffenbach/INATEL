import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#1
rio = pd.read_csv("rio.csv", delimiter = ',')

rioHomem = rio[rio['sex'].str.contains('male')]
rioMulher = rio[rio['sex'].str.contains('female')]

NumHomem = len(rioHomem)
NumMulher = len(rioMulher)

plt.title("Quantidade  de  atletas")
plt.bar(x = [0,1], height = [NumHomem, NumMulher], color = ['green', 'red'])
plt.ylabel("Numero de atletas")
plt.xlabel("Sexo")
plt.xticks(ticks=[0,1], labels=["Homens", "Mulheres"])
plt.show()

#2
rioPeso = rio[rio['weight'] >= 150]
print('Esportes que possuem atletas com o peso >= 150: ')
print(rioPeso['sport'].unique())
print('-'*60)

#3
rioGold = rio[rio['gold'] == max(rio['gold'] )]
print('Atleta com maior numero de medalhas de ouro:')
print('Nome: ', rioGold['name'].values)
print('Nacionalidade: ', rioGold['nationality'].values)
print('Esporte: ', rioGold['sport'].values)
print('-'*60)

#4
rioVoleiFeminino = rio[rio['sex'].str.contains('female')]
rioVoleiFeminino = rioVoleiFeminino[rioVoleiFeminino['sport'].str.contains('volleyball')]

alturaGeral = rioVoleiFeminino['height']

media = np.mean(alturaGeral)
print(f'Media de altura de volleyball feminino: {media: .3}' )
print('-'*60)

#5
rioPaises = rio['nationality'].unique()
aux=[]
aux2=[]
lista=[]
paises = []
nums = []

for i in range(len(rioPaises)):
    aux.append(rio[rio['nationality'].str.contains(rioPaises[i])])

for i in range(len(rioPaises)):
    dicionario = {"num": len(aux[i]), "pais": np.unique(aux[i]['nationality'].values)}
    aux2.append(dicionario)

for i in range(len(aux2)):
    lista.append(aux2[i]['num'])

indices = sorted(range(len(lista)), key=lambda i: lista[i], reverse=True)

for i in range(3):
    paises.append(aux2[indices[i]]['pais'])
    nums.append(lista[indices[i]])

paises = [np.take(paises,0),np.take(paises,1),np.take(paises,2)]

def make_autopct(values):
    def my_autopct(pct):
        total = sum(values)
        val = int(round(pct*total/100.0))
        return '{p:.2f}%  ({v:d})'.format(p=pct,v=val)
    return my_autopct

plt.pie(x = nums, labels = paises, shadow=True, explode=[0.1,0,0], autopct=make_autopct(nums))
plt.title("Quantidade  de  atletas")
plt.show()

