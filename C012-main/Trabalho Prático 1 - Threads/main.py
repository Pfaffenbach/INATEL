import threading
import time

# Chave do carro
global chave

# Carro desligado
chave = False

# Função que representa o que o carro vai fazer
def carro(marcha):
    for i in range(4):

        # Verificando se o carro ta desligado 
        if chave == False:
            break
        
        # marcha = 0, carro no neutro
        if i == 0:
            print("Liguei o carro")
            time.sleep(2)
        else :
            # mostrando marcha que foi engatada
            print(marcha, i)
        
            print("Acelerando o possante!!!")

            # Tempo entre uma resposta e outra
            time.sleep(2)
            
print("Entrei no carro")
chave = True
time.sleep(2)

# target é o nome da função que vai ser executada em paralelo
# args é o valor que é colocado como mensagem na variável marcha
threading.Thread(target=carro, args=("Engatando a marcha ", )).start()

# time sleep usado para parar o processamento que acontece na função
time.sleep(8)

print("Dando seta para estacionar")
# time sleep usado para aumentar o tempo de resposta para dar tempo do piloto estacionar
time.sleep(3)

print("Desliguei o carro porque gasolina está cara")
chave = False