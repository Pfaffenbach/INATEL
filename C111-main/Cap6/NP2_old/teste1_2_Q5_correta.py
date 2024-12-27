import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

rio = pd.read_csv("rio.csv", delimiter = ',')
#1

homens = rio[rio['sex'] == 'male']
qtd_homens = len(homens)

mulheres = rio[rio['sex'] == 'female']
qtd_mulheres = len(mulheres)

plt.title("Number of male and female")

plt.bar(x = [0,1], height = [qtd_homens, qtd_mulheres], color = ['blue', 'pink'])

plt.ylabel("Number")
plt.xlabel("Gender")

plt.xticks(ticks=[0,1], labels=["Male", "Female"])

plt.show()

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

maisAtletas = atlPorPais[:3]

print(maisAtletas)

plt.pie(maisAtletas.values, labels = maisAtletas.index, colors = ["blue","yellow","red"], autopct='%1.1f%%')
plt.show()
