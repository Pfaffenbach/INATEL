import org.junit.Test;
import static org.junit.Assert.*;

public class TesteBuscaInimigo {

    @Test
    public void testeBuscaInimigoSkeleton(){
        //Criando contexto
        InimigoService service = new MockInimigoService();
        BuscaInimigo buscaInimigo = new BuscaInimigo(service);

        Inimigo skeleton = buscaInimigo.buscaInimigo(10);

        assertEquals("Skeleton", skeleton.getNome());
        //assertEquals(200.0,skeleton.getQtdVida());
        assertEquals("Espada do Skeleton", skeleton.getArma());
    }
}
