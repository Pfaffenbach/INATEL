package br.inatel.manager.impl;

import br.inatel.manager.interfaces.iObservavel;

import java.util.ArrayList;
import java.util.List;

public class Observavel implements iObservavel {

    private String frase;
    private String[] palavras;
    private int qtdPalavras;
    private int qtdPalavrasPares;
    private int qtdPalavrasMaiusculas;

    private List<Observador> clientes;

    public Observavel() {
        clientes = new ArrayList<Observador>();
    }

    @Override
    public void registraObservador(Observador obs) {
        clientes.add(obs);
    }

    @Override
    public void removeObservador(Observador obs) {
        if(clientes.contains(obs))
            clientes.remove(obs);
    }

    @Override
    public void notificaObservadores() {
        for (Observador observador : clientes) {
            observador.update(this);
        }
    }

    public void setNovaFrase(String frase) {
        System.out.println("Nova frase adicionada");
        this.frase = frase;
        firstSplit(this.frase);
        contaPalavras();
        contaPalavrasCharPar();
        contaPalavrasMaiusculas();
        novasMedidas();
    }

    //Esse método é chamado sempre que os valores
    //se modificacam
    private void novasMedidas() {
        notificaObservadores();
    }

    private void firstSplit(String s){
        this.palavras = s.split("\\s+");
    }

    private void contaPalavras(){
        qtdPalavras = palavras.length;
    }

    private void contaPalavrasCharPar(){
        int cont = 0;
        for(String palavra : palavras){
            if(palavra.length()%2 == 0){
                cont++;
            }
        }
        qtdPalavrasPares = cont;
    }

    private void contaPalavrasMaiusculas(){
        int cont = 0;
        for(String palavra : palavras){
            if(Character.isUpperCase(palavra.charAt(0))) {
                cont++;
            }
        }
        qtdPalavrasMaiusculas = cont;
    }

    public void setClientes(List<Observador> clientes) {
        this.clientes = clientes;
    }

    public List<Observador> getClientes() {
        return clientes;
    }

    public int getQtdPalavras() {
        return qtdPalavras;
    }

    public int getQtdPalavrasPares() {
        return qtdPalavrasPares;
    }

    public int getQtdPalavrasMaiusculas() {
        return qtdPalavrasMaiusculas;
    }

}
