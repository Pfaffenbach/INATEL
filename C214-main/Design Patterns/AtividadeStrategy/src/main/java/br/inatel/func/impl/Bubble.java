package br.inatel.func.impl;

import java.util.ArrayList;
import java.util.List;

import br.inatel.Ordenador;

public class Bubble implements Ordenador {

    @Override
    public ArrayList ordena(ArrayList<Integer> listaInt) {
        // for utilizado para controlar a quantidade de vezes que o vetor será ordenado.
        for (int i = 0; i < listaInt.size() - 1; i++) {
            // for utilizado para ordenar o vetor.
            for (int j = 0; j < listaInt.size() - 1 - i; j++) {
        /* Se o valor da posição atual do vetor for maior que o proximo valor,
          então troca os valores de lugar no vetor. */
                if (listaInt.get(j) > listaInt.get(j + 1)) {
                    int aux = listaInt.get(j);
                    listaInt.set(j, listaInt.get(j+1));
                    listaInt.set(j+1, aux);
                }
            }
        }
        return listaInt;
    }
}