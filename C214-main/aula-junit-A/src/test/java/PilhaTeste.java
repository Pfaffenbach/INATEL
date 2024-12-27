import org.junit.Test;

import java.util.EmptyStackException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class PilhaTeste {

    @Test
    public void testePilhaVazia(){
        Pilha<Integer> pilhaInteiros = new Pilha<Integer>();

        boolean vazia = pilhaInteiros.pilhaVazia(); // Processamento

        assertTrue(vazia); // Verificação
    }

    @Test
    public void testePilhaPush(){
        Pilha<Integer> pilhaInteiros = new Pilha<Integer>(); // Contexto

        // Processamento
        pilhaInteiros.push(77);
        int tamanho = pilhaInteiros.size();

        assertEquals(1,tamanho); // Verificação
    }
    @Test
    public void testePilhaPopSize() {
        Pilha<Integer> pilhaInteiros = new Pilha<Integer>(); // Contexto

        // Processamento
        pilhaInteiros.push(77);
        pilhaInteiros.pop();
        int tamanho = pilhaInteiros.size();

        assertEquals(0,tamanho); // Verificação
    }

    @Test (expected = EmptyStackException.class) // Verificação
    public void testePilhaPopException(){
        Pilha<Integer> pilhaInteiros = new Pilha<Integer>(); // Contexto

        pilhaInteiros.pop(); // Processamento
    }
}