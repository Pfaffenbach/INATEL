import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

paises = pd.read_csv("paises.csv", delimiter = ';')

#Questão 1
paisesALC = paises[['Country', 'Region', 'Population', 'Area (sq. mi.)']][paises['Region'].str.contains('LATIN AMER. & CARIB')]
print('Paises da America Latina e Caribe')
print(paisesALC)

print('-'*80)

#Questão 2
regioes = paises['Region'].unique()
print('Regiôes do globo terrestre')
print(regioes)
print('Numero de Regiôes')
print(len(regioes))

print('-'*80)

#Questão 3
taxasGlobais = paises['Literacy (%)']
mediaTaxasGlobais = np.mean(taxasGlobais)
print('Média da alfabetização Global: ',mediaTaxasGlobais )

print('-'*80)

#Questão 4
paisesAMN = paises[['Country', 'Population', 'GDP ($ per capita)']][paises['Region'].str.contains('NORTHERN AMERICA')]

paisMaiorPop = paisesAMN['GDP ($ per capita)'][paisesAMN['Population'] == max(paisesAMN['Population'])]
paisMenorPop = paisesAMN['GDP ($ per capita)'][paisesAMN['Population'] == min(paisesAMN['Population'])]

rendaMaiorPop = int(paisMaiorPop)
rendaMenorPop = int(paisMenorPop)

plt.title("Renda Per Capita")

plt.bar(x = [0,1], height = [rendaMaiorPop, rendaMenorPop], color = ['blue', 'red'])

plt.ylabel("GDP ($ per capita)")
plt.xlabel("Population")

plt.xticks(ticks=[0,1], labels=["MaiorPop", "MenorPop"])

plt.show()

