import numpy as np

colors = [ 
    {"color": "black", "type": "primary", "code": {"rgba": [255,255,255,1],"hex": "#000"}},
    {"color": "green", "type": "secondary", "code": {"rgba": [0,255,0,0.1],"hex": "#0F0"}},
    {"color": "yellow", "type": "primary","code": {"rgba": [255,255,0,0.7],"hex": "#FF0"}},
    {"color": "blue", "type": "primary","code": {"rgba": [0,0,255,1],"hex": "#00F"}}
]

print('Cores primarias: ')
for i in range(len(colors)):
    if colors[i]['type'] == 'primary':
        print(colors[i]['color'])

for i in range(len(colors)):
    if colors[i]['code']['rgba'][2] == 255:
        print(colors[i]['code']['rgba'])

lista_aux = []

for i in range(len(colors)):
    lista_aux.append(colors[i]['color'])
    lista_aux.append(colors[i]['code']['hex'])

new = np.array([lista_aux])
print(new)

new[new == 'black'] = 'preto'
new[new == 'green'] = 'verde'
new[new == 'yellow'] = 'amarelo'
new[new == 'blue'] = 'azul'

print(new)