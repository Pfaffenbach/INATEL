import numpy as np

'''
#Exemplo da aula
np.random.seed(10)
arr = np.random.randint(0,10,15)

#print(arr)

#Fazendo slicing em arr
arr2 = arr[0:4].copy()

#Alterando um elemento de arr2
arr2[0] = 100

#print(arr)
#print(arr2)

#Trabalhando com o submodulo python.char
txt = "O inatel é uma faculdade top demais"
print(np.char.find(txt, "faculdade"))

'''

#Importando o dataset space.csv
arr = np.loadtxt("space.csv", delimiter=';', dtype=str, encoding='utf-8')

'''
#Exemplo da aula

#vendo as colunas do dataset
print(spaceDS[0])

#vendo apenas o nome das empresas
print(spaceDS[1:, 1])

#vendo apenas o nome das empresas sem repetições
print(np.unique(spaceDS[1:, 1]))
'''

#Exercício proposto

#Exericio 1
arr2= arr[1:,7].copy()

success= arr2[arr2 == 'Success'].size / arr2.size

print(f'Missoes bem sucedidas:{success: .2%}')

#Exericio 2
arr3= arr[1:,6].copy()

print(f'Media de gastos {round(sum(map(float, arr3))/ arr3.size, 2)}')

#Exericio 3
arr4= arr[1:,2].copy()

usa = arr4[np.char.find(arr4,'USA') != -1].size

print(f'{usa} missoes foram realizadas pelos EUA')

#Exericio 4
arr5 = arr[1:].copy()

arr5 = arr5[np.char.startswith(arr5[:,1],'SpaceX')].copy()

arr6 = arr5[:,6].copy()

max_value = np.max(list(map(float, arr6)))

print('Essas foram as missoes mais caras realizadas pela SpaceX:')
print(arr5[np.char.startswith(arr5[:,6],str(max_value))])

#Exericio 5
arr5 = arr[1:].copy()
arr7 = arr[1:,1].copy()

tamanho = np.unique(arr7)

for i in tamanho:  
    print(f'A {i} realizou {arr5[np.char.startswith(arr5[:,1],i)].size} missoes')
