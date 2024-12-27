import numpy as np
import pandas as pd

'''
#Criando uma séries
series1 = pd.Series(
    {'a':10,'b':20,'c':30}
    )

print(series1['b'])

series2 = pd.Series(
    {'a':10,'c':50,'d':80}
    )

print(series1.add(series2, fill_value=0)) #Se não tiver um indice compativel tratar como zero

#Slicing de series
print(series1[['a','b']])

#Fazendo condicional
print(series1[series1 == 30])
'''

# Criando um DATA FRAME
np.random.seed(10)

df1 = pd.DataFrame(
    #Gerando numeros de 1 a 50 em uma matriz 5x4
    data = np.random.randint(1, 50, [5, 4]),
    #Passando nomes das colunas e linhas
    columns=['W','X','Y','Z'],
    index=['A','B','C','D','E']
)

'''
print(df1) #Mostrando toda matriz

#Primeiro usar a coluna depois a linha
print(df1['X']['C']) #pegando valor da linha C e coluna X
print(df1['W']) #valores da coluna W
print(df1[['W', 'Z']]) #valores das colunas W e Z

#Deletando uma coluna ou linha
print(df1.drop('W', axis=1)) #axis=1 -> Coluna
print(df1.drop('B', axis=0)) #axis=0 -> Linha
'''
# Importando o Dataset com o Pandas
dataset = pd.read_csv('paises.csv', delimiter=';')
print(dataset)

print(dataset.head(0)) #mostrando uma linha específica

