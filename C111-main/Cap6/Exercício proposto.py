from turtle import color
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Exercicio 1
dfSpace = pd.read_csv('space.csv', delimiter=';')

#achando as empresas da china e USA
usa = dfSpace[dfSpace['Location'].str.contains('USA')]
china = dfSpace[dfSpace['Location'].str.contains('China')]

#Achando apenas empresas nao repetidas
ChinaCompaniesUnique = china["Company Name"].unique()
USACompaniesUnique = usa["Company Name"].unique()

#Descobrindo quantas empresas em numero
NumChinaCompanies = len(ChinaCompaniesUnique)
NumUSACompanies = len(USACompaniesUnique)

plt.title("Space companies of USA and China")

plt.bar(x = [0,1], height = [NumUSACompanies, NumChinaCompanies], color = ['blue', 'red'])

plt.ylabel("Companies numbers")
plt.xlabel("Countries")

plt.xticks(ticks=[0,1], labels=["USA", "China"])

plt.show()

# Exercicio 2
paises = pd.read_csv("paises.csv", delimiter = ';')

#Selecionando do dataset os dados de Birthrate e Deathrate , e puxando o pais tambem
BirthRate = paises.loc[paises["Region"].str.contains("NORTHERN AMERICA"), ["Country", "Birthrate"]]
DeathRate = paises.loc[paises["Region"].str.contains("NORTHERN AMERICA"), ["Country", "Deathrate"]]

#plotando o gráfico
plt.title("Northern America countries Birthrate vs Deathrate")

plt.xlabel("Countries")
plt.ylabel("Tax of Birthrate and Deathrate")

plt.plot(np.arange(len(BirthRate)), BirthRate["Birthrate"], color = "blue", marker= "v", linestyle = ":", label = "Birthrate")
plt.plot(np.arange(len(DeathRate)), DeathRate["Deathrate"], color = "red", marker= "x", linestyle = ":", label = "Deathrate")

plt.xticks(ticks = np.arange(len(BirthRate)), labels=BirthRate["Country"])

plt.legend()

plt.show()
