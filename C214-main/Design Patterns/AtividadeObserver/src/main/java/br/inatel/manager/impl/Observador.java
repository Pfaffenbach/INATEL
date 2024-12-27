package br.inatel.manager.impl;

import br.inatel.manager.interfaces.iObservador;

public class Observador implements iObservador {

    int id;

    public Observador(int id) {
        this.id = id;
    }

    @Override
    public void update(Observavel manager) {
        System.out.println("Cliente: "+this.id);
        System.out.println("Quantidade de palavras: " + manager.getQtdPalavras());
        System.out.println("Quantidade de palavras pares: " + manager.getQtdPalavrasPares());
        System.out.println("Quantidade de palavras que começam com maiuscula: "+ manager.getQtdPalavrasMaiusculas());
    }

}
