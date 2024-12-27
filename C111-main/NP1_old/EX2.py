import numpy as np

nomes_1 = np.array(['Erich','João','Maria','Clodosverto'])
nomes_2 = np.array(['Claudia','Friederich','André','Craudinei'])

nomes = np.concatenate([nomes_1,nomes_2])
print(nomes)

nomes = nomes.reshape(2,4)
print(nomes)

nomes = np.flip(np.sort(nomes))
print(nomes)
