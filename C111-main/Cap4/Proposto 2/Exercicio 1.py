import numpy as np

np.random.seed(5)

arr = np.random.rand(10)

arr2 = (arr*100)

arr_int = arr2.astype(int)

print(arr_int)