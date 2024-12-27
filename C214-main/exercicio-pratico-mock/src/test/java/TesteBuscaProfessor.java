import org.junit.Test;
import static org.junit.Assert.*;

public class TesteBuscaProfessor {

    @Test
    public void testeBuscaProfessor1(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor1 = buscaProfessor.buscaprofessor("João");

        //Faz assertion
        assertEquals("João", professor1.getNomeDoProfessor());
        assertEquals(17, professor1.getHorarioDeAtendimento(), 0.1);
        assertEquals("noturno", professor1.getPeriodo());

    }

    @Test
    public void testeBuscaProfessor2(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor2 = buscaProfessor.buscaprofessor("Flavio");

        //Faz assertion
        assertEquals("Flavio", professor2.getNomeDoProfessor());
        assertEquals(8, professor2.getHorarioDeAtendimento(), 0.1);
        assertEquals("integral", professor2.getPeriodo());

    }

    @Test
    public void testeBuscaProfessor3(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor3 = buscaProfessor.buscaprofessor("Matheus");

        //Faz assertion
        assertEquals("Matheus", professor3.getNomeDoProfessor());
        assertEquals(11, professor3.getHorarioDeAtendimento(), 0.1);
        assertEquals("noturno", professor3.getPeriodo());

    }

    // Professor não existente então ele cai no caso de inesistente
    @Test
    public void testeBuscaProfessor4(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor4 = buscaProfessor.buscaprofessor("Roberto");

        //Faz assertion
        assertEquals("Inesistente", professor4.getNomeDoProfessor());
        assertEquals(0, professor4.getHorarioDeAtendimento(), 0.1);
        assertEquals("Inesistente", professor4.getPeriodo());

    }

    // Professor não existente então ele cai no caso de inesistente
    @Test
    public void testeBuscaProfessor5(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor5 = buscaProfessor.buscaprofessor("Joana");

        //Faz assertion
        assertEquals("Inesistente", professor5.getNomeDoProfessor());
        assertEquals(0, professor5.getHorarioDeAtendimento(), 0.1);
        assertEquals("Inesistente", professor5.getPeriodo());

    }

    // Professor não existente então ele cai no caso de inesistente
    @Test
    public void testeBuscaProfessor6(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);
        //Fiz a busca
        Professor professor6 = buscaProfessor.buscaprofessor("Luiza");

        //Faz assertion
        assertEquals("Inesistente", professor6.getNomeDoProfessor());
        assertEquals(0, professor6.getHorarioDeAtendimento(), 0.1);
        assertEquals("Inesistente", professor6.getPeriodo());

    }

    // Não foi utilizado mas está funcionando
    @Test
    public void testeBuscaProfessorValido(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);

        boolean professorValido = buscaProfessor.verificaArrayListExistente("");

        assertTrue(professorValido);
    }

    // Não foi utilizado mas está funcionando
    @Test
    public void testeBuscaProfessorInValido(){
        ProfessorService service = new MockProfessorService();
        BuscaProfessor buscaProfessor = new BuscaProfessor(service);

        boolean professorInvalido = buscaProfessor.verificaArrayListExistente("");

        assertFalse(professorInvalido);
    }
}
