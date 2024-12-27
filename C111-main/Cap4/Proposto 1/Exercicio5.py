from calendar import c
from this import d
import numpy as np

mtz = np.arange(1,13,1).reshape(3,4)

valor = mtz.size 

if valor%2 == 0:
    print("numero par de elementos")
if valor%2 != 0:
    print("numero impar de elementos")
