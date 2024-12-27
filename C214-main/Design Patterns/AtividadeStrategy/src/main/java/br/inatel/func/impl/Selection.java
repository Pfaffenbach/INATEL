package br.inatel.func.impl;

import br.inatel.Ordenador;

import java.util.ArrayList;

public class Selection implements Ordenador {
    @Override
    public ArrayList ordena(ArrayList<Integer> listaInt) {
        for (int fixo = 0; fixo < listaInt.size()- 1; fixo++) {
            int menor = fixo;

            for (int i = menor + 1; i < listaInt.size(); i++) {
                if (listaInt.get(i) < listaInt.get(menor)) {
                    menor = i;
                }
            }
            if (menor != fixo) {
                int t = listaInt.get(fixo);
                listaInt.set(fixo, listaInt.get(menor));
                listaInt.set(menor, t);
            }
        }
        return listaInt;
    }
}
