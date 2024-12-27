import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

rio = pd.read_csv("rio.csv", delimiter = ',')

#1 

homens = rio[rio['sex'] == 'male']
qtd_homens = len(homens)

mulheres = rio[rio['sex'] == 'female']
qtd_mulheres = len(mulheres)

print(f'Qauntidade de homens na olimpiada: {qtd_homens}')
print(f'Qauntidade de mulheres na olimpiada: {qtd_mulheres}')

#2

atlPesado = rio[rio['weight'] >= 150]

esportsPesados = atlPesado['sport']

print(esportsPesados.unique())

#3

atlOuro = rio.loc[rio['gold'].idxmax()]

print(atlOuro['name'])
print(atlOuro['nationality'])
print(atlOuro['sport'])

#4

sportVolei = rio[rio['sport'] == 'volleyball']

sportVoleiFamale = sportVolei[sportVolei['sex'] == 'female']

heightVoleiFemale = sportVoleiFamale['height']

print(np.mean(heightVoleiFemale))

#5
atlPorPais = rio['nationality'].value_counts()

print(f'O país com mais atletas é o {atlPorPais.index[0]} que possui {atlPorPais.values[0]} atletas')


