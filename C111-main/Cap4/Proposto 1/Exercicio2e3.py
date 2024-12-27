import numpy as np

#Questão 2
arr1 = np.arange(0, 51, 2)
arr2 = np.arange(100, 50, -2)

arr2_sort = np.sort(arr2)
arr = np.concatenate([arr1, arr2_sort])

print(arr)

#Questão 3
arr_flip = np.flip(np.sort(arr))

print(arr_flip)