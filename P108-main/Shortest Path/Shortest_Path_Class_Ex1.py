# -*- coding: utf-8 -*-
"""
Shortest Path solved by Integer Linear Programming.

Solution of Example 1, class P108 at Inatel.

From book Pesquisa Operacional - Oitava Edicao - Hamdy A. Taha
"""

from gekko import GEKKO
m = GEKKO()
x12,x13,x23,x34,x35,x42,x45 = m.Array(m.Var,7,integer=True,lb=0)
m.Minimize(100*x12+30*x13+20*x23+10*x34+60*x35+15*x42+50*x45)
m.Equations([1==x12+x13,
             x12+x42==x23+1,
             x13+x23==x34+x35,
             x34==x42+x45,
             x35+x45==0])
m.options.SOLVER = 1
m.solve()
print('Objective: ', m.options.OBJFCNVAL)
print('x12: ', x12.value[0])
print('x13: ', x13.value[0])
print('x23: ', x23.value[0])
print('x34: ', x34.value[0])
print('x35: ', x35.value[0])
print('x42: ', x42.value[0])
print('x45: ', x45.value[0])