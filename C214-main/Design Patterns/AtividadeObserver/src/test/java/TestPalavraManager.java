import br.inatel.manager.impl.Observador;
import br.inatel.manager.impl.Observavel;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class TestPalavraManager {

    @Test
    public void testeInscritos(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        manager.registraObservador(obs1);
        assertTrue(!manager.getClientes().isEmpty());
    }

    @Test
    public void testTodosInscritos(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        Observador obs2 = new Observador(2);
        Observador obs3 = new Observador(3);
        manager.registraObservador(obs1);
        manager.registraObservador(obs2);
        manager.registraObservador(obs3);
        assertEquals(3, manager.getClientes().size());
    }

    @Test
    public void testeRemoveInscrito(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        Observador obs2 = new Observador(2);
        manager.registraObservador(obs1);
        manager.registraObservador(obs2);
        manager.removeObservador(obs2);
        assertEquals(1, manager.getClientes().size());
    }

    @Test
    public void testContaPalavras(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        manager.registraObservador(obs1);
        manager.setNovaFrase("Bora comer pizza");
        assertEquals(4, manager.getQtdPalavras());
    }

    @Test
    public void testContaPalavrasCharPar(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        manager.registraObservador(obs1);
        manager.setNovaFrase("Bora comer pizza");
        assertEquals(3, manager.getQtdPalavrasPares());
    }

    @Test
    public void testContaPalavrasMaiusculas(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        manager.registraObservador(obs1);
        manager.setNovaFrase("Bora comer pizza");
        assertEquals(1, manager.getQtdPalavrasMaiusculas());
    }

    @Test
    public void testContaPalavras_NaFraseComMaisDeUmEspaço(){
        Observavel manager = new Observavel();
        Observador obs1 = new Observador(1);
        manager.registraObservador(obs1);
        manager.setNovaFrase("Bora       comer    pizza");
        assertEquals(4, manager.getQtdPalavras());
    }

}
