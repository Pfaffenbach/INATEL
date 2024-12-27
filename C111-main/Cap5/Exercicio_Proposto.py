# Erich Pfaffenbach - GES - 10
# Exercício Proposto C111

import numpy as np
import pandas as pd

# carregando um data-set usando pandas
dataset = pd.read_csv('paises.csv', delimiter=';')

#Questão 1
#a
paisesOceania = dataset['Country'][dataset['Region'].str.contains('OCEANIA')]

print('Paises da Oceania')
print(paisesOceania)
print('-'*30)

#b
print('Quantidade de paises da Oceaenia: ', len(paisesOceania))
print('-'*30)

#Questão 2
taxasGlobais = dataset['Literacy (%)']
mediaTaxasGlobais = np.mean(taxasGlobais)
print('Média da alfabetização Global: ',mediaTaxasGlobais )
print('-'*30)

#Questão 3
paisMaiorPop = dataset[['Country','Region']][dataset['Population'] == max(dataset['Population'])]

print('País e Região com a maior população: ',paisMaiorPop )
print('-'*30)

#Questão 4
paisesSemCosta = dataset['Country'][dataset['Coastline (coast/area ratio)'] == 0]

paisesSemCosta.to_csv('Paises_Sem_Costa.csv', sep=';', header=False)
