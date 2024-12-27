# -*- coding: utf-8 -*-
"""
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Algorithm for Minimum Spanning Tree.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% Input
% Cost_Matrix.xls - A spreadsheet cost for each edge/arc among nodes in a 
%                   network. The cost between two nodes without edge/arc is 0.
%                   From one node to itself, cost is 0.
%
% Output
% Total cost of the minimum spanning tree.
% A list of edges/arcs for the minimum spanning tree.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

@author: Guilherme Augusto Barucke Marcondes - guilherme@inatel.br
"""

import numpy as np
from xlrd import open_workbook

#Read input data from Cost_Matrix.xls spreadsheet.
wb = open_workbook('Cost_Matrix.xls')

for s in wb.sheets():
    number_of_nodes = 0
    for col in range(1,s.ncols):
        if (s.cell(0,col).value)!='':
            number_of_nodes = number_of_nodes + 1
            
#Create two dimensional matrix.
cost_matrix = np.zeros((number_of_nodes,number_of_nodes), dtype=float)

for row in range(s.nrows):
    for col in range(s.ncols):
        if row > 0:
            value  = (s.cell(row,col).value)
            cost_matrix[row-1,col-1] = value

#Excluding 0 in cost matrix and convert it to list.
cost_matrix[cost_matrix == 0] = 10*cost_matrix.max()
cost = cost_matrix.tolist()
       
#Initialize lists for iteractions.     
not_connected = []
connected = []

#Start with all nodes not connected
for i in range(number_of_nodes):
    not_connected.append(i)

#First iteraction - start with first node
connected.append(min(not_connected)) #Include first not in connected.
not_connected.pop(not_connected.index(min(not_connected))) #Exclude first not
                                                           #from not_connected.

#Other iteractions
edge_from =[]
edge_to = []

total_cost = 0

while not_connected != []:

    temp_min = 10*cost_matrix.max() #Stablish a big value for starting.
    
    for i in connected:
        for j in not_connected:
            if cost[i][j] < temp_min:
                temp_min = cost[i][j]
                from_node = i
                to_node = j
    
    total_cost = total_cost + temp_min
    connected.append(to_node)
    not_connected.pop(not_connected.index(to_node))
    
    edge_from.append(from_node)
    edge_to.append(to_node)
    
#Print Arcs.
print (100*'\n')
print ('Minimum Spanning Tree - Result')
print ('\n')
print ('Total Cost: ',total_cost)
print ('\n')
for i in range(0,len(edge_from)):
    print ("Arc",i+1,"-->",edge_from[i]+1,"-",edge_to[i]+1)
