loja1 = {'Xiaomi mi lite 8', 'Galaxy S20', 'Iphone SE'}
loja2 = {'Xiaomi mi lite 8', 'Galaxy A31', 'Huawei P30 Pro'}

print('Modelos loja 1')
print(loja1)
print('Modelos loja 2')
print(loja2)

print('Modelos disponiveis')
modelos = loja1|loja2
print(modelos)

print('Modelo igual')
modelo_igual = loja1&loja2
print(modelo_igual)