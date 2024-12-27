futebol = ['Vasco', 'Real Madri', 'Alagoas', 'Barcelona', 'São Paulo']

print('Questao A')
for i in range(0,3):
    print(futebol[i])

print('Questao B')
for i in range(3,5):
    print(futebol[i])

print('Questao C')
futebol.sort()
print(futebol)

print('Questao D')
time = 'Barcelona'
for i in range(0,5):
    if futebol[i] == time:
        print(i)