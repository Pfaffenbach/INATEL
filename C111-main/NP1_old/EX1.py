import numpy as np

verify = False

#
musics = []
music_aux = {}

while(verify != True):
    music_name = input('Nome da musica: ')
    music_year = input('Ano da musica: ')
    music_aux = {
        'nome' : music_name,
        'ano' : music_year
    }
    musics.append(music_aux)
    verifica = int(input('Digite 1 para continuar ou 0 para sair: '))
    if(verifica == 0):
        verify = True

#Numero de musicas cadastradas
print(f'{len(musics)} musicas cadastradas')

#menor ano
old_year = 9999

#ano de referencia para localizar o menor ano
ref_year = 0

#variável para pegar o infomarção do menor
info = int

for i in range(len(musics)):
    ref_year = musics[i]['ano']
    if old_year > int(ref_year):
        old_year = ref_year
        info = i

print(musics[info])