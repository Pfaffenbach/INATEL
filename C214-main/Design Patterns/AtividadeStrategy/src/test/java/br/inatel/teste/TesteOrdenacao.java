package br.inatel.teste;

import br.inatel.Main;
import br.inatel.OrdenaBubble;
import br.inatel.OrdenaInsertion;
import br.inatel.OrdenaSelection;
import br.inatel.func.impl.Bubble;
import br.inatel.func.impl.Insertion;
import br.inatel.func.impl.Selection;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class TesteOrdenacao {

    Main main;

    @Test
    public void testeOrdenaBubble() {
        main = new OrdenaBubble();
        ArrayList<Integer> des = new ArrayList<>();
        des.add(32);
        des.add(10);
        des.add(23);
        des.add(4);
        des.add(1);
        ArrayList<Integer> ord = new ArrayList<>();
        ord.add(1);
        ord.add(4);
        ord.add(10);
        ord.add(23);
        ord.add(32);

        main.ordenaVetor(des);

        assertTrue(main.getOrdenador() instanceof Bubble);
        assertEquals(ord, des);
    }

    @Test
    public void testeOrdenaInsertion() {
        main = new OrdenaInsertion();
        ArrayList<Integer> des = new ArrayList<>();
        des.add(32);
        des.add(10);
        des.add(23);
        des.add(4);
        des.add(2);
        ArrayList<Integer> ord = new ArrayList<>();
        ord.add(4);
        ord.add(10);
        ord.add(23);
        ord.add(32);
        ord.add(2);

        main.ordenaVetor(des);

        assertTrue(main.getOrdenador() instanceof Insertion);
        assertEquals(ord, des);

    }

    @Test
    public void testeOrdenaSelection() {
        main = new OrdenaSelection();
        ArrayList<Integer> des = new ArrayList<>();
        des.add(32);
        des.add(10);
        des.add(23);
        des.add(4);
        des.add(1);
        ArrayList<Integer> ord = new ArrayList<>();
        ord.add(1);
        ord.add(4);
        ord.add(10);
        ord.add(23);
        ord.add(32);

        main.ordenaVetor(des);

        assertTrue(main.getOrdenador() instanceof Selection);
        assertEquals(ord, des);
    }

}
