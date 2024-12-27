package br.inatel.manager.interfaces;

import br.inatel.manager.impl.Observador;

public interface iObservavel {

    public void registraObservador(Observador obs);
    public void removeObservador(Observador obs);
    public void notificaObservadores();

}
