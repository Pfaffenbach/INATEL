import numpy as np

np.random.seed(10)

mtz = np.random.randint(1,50,16).reshape(4,4)

#Questão 2
print("Questão 2")
print("Matriz 4x4")
print(mtz)
print("-"*15)

#Questão 3
print("Questão 3")
linha = mtz.mean(axis=1)
coluna = mtz.mean(axis=0)

print("Linha")
print(linha)
print("Maior valor das linhas")
print(linha.max())
print("-"*15)

print("Coluna")
print(coluna)
print("Maior valor das linhas")
print(coluna.max())
print("-"*15)

#Questão 4
print("Questão 4")
elemento, conts = np.unique(mtz, return_counts= True)

print(elemento)

print("Elementos que aparecem 2x:")

for i, e in enumerate(elemento):
    if conts[i] >= 2:
        print(f"Elemento: {e} = {conts[i]}")