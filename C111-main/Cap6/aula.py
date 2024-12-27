from matplotlib import markers
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


# Dados no eixo x
x = np.array([1,2,3,4])

# Dados no eixo y1
# Fazendo Broadcasting no eixo y
y = x*2

# Dados no eixo y2
y2 = x*x

# Colocando legenda nos eixos
plt.xlabel('Dados do Eixo X')
plt.ylabel('Dados do Eixo Y')

# Plotando os dados no gráfico
plt.plot(x,y, 'o--b', x, y2,'o--r', linewidth=2, markersize=10)
plt.show()

'''
# SubPlot
# Dados no eixo x
x = np.array([1,2,3,4])

# Dados no eixo y1
# Fazendo Broadcasting no eixo y
y = x*2

# Dados no eixo y2
y2 = x*x

# Traçando o primeiro subplot
plt.subplot(1,2,1) # Linha, Coluna, Celula
plt.title('Linear')
plt.plot(x,y, 'o--b')

# Traçando o segundo subplot
plt.subplot(1,2,2)
plt.title('Exponencial')
plt.plot(x,y2, 'o--r')

plt.show()
'''
'''
# Scatter Plot
# Lendo dataset paises
dfPaises = pd.read_csv('paises.csv', delimiter=';')

# Extraindo somente dados dos 6 maiores países do mundo
dfPaises2 = dfPaises.nlargest(6, 'Area (sq. mi.)')

# Plotando gráfico
# Tamanho das bolinhas representa o tamanho dos países
# Primeiro Argumento - eixo x
# Segundo Argumento - eixo y
# Terceiro Argumento - tamanho das bolinhas
plt.scatter(dfPaises2['Country'],
    dfPaises2['GDP ($ per capita)'],
    s=dfPaises2['Area (sq. mi.)']/10000)

plt.show()
'''

