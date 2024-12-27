package br.inatel;

import br.inatel.manager.impl.Observador;
import br.inatel.manager.impl.Observavel;

public class Main {

    public static void main(String[] args) {

        // Criando o observavel
        Observavel wordManager = new Observavel();

        //Criando 3 observadores e fazendo a inscrição
        Observador obs1 = new Observador(1);
        Observador obs2 = new Observador(2);
        Observador obs3 = new Observador(3);

        wordManager.registraObservador(obs1);
        wordManager.registraObservador(obs2);
        wordManager.registraObservador(obs3);

        wordManager.setNovaFrase("Bora comer lanche");
    }
}
