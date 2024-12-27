
import java.util.concurrent.Semaphore;

public class CriticalSection extends Thread{
    public static Bauducco fabrica = new Bauducco(300);
    private int idThread;
    private Semaphore semaforo;
    
 
    public CriticalSection(int id, Semaphore semaphore) {
        this.idThread = id;
        this.semaforo = semaphore;
    }
    
    private void processar() {
        try {
            System.out.println("Produção do produto " + (idThread + 1) + " em andamento");
            Thread.sleep((long) (Math.random() * 10000));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void entrarRegiaoNaoCritica() {
        System.out.println("Produção do produto " + (idThread + 1) + " ainda em região não crítica");
        processar();
    }
 
    private void entrarRegiaoCritica() {
        System.out.println("Produção do produto " + (idThread + 1)
                + " entrando em região crítica");
        fabrica.usarMateriaPrima();
        processar();
        System.out.println("Produção do produto " + (idThread + 1) + " saindo da região crítica");
    }
    
    public static void main(String[] args) {
        int numeroDePermicoes = 1;
        int numeroDeProcessos = 6;
        Semaphore semaphore = new Semaphore(numeroDePermicoes);
        CriticalSection[] processos = new CriticalSection[numeroDeProcessos];
        for (int i = 0; i < numeroDeProcessos; i++) {
            processos[i] = new CriticalSection(i, semaphore);
            processos[i].start();
        }
    }

    public void run() {
        // REGIÃO CRÍTICA SEM CONTROLE
//        entrarRegiaoCritica();
//        System.out.println("Volume de matéria prima: " + fabrica.getMateriaPrima());
        
        // REGIÃO CRITICA COM CONTROLE
        try {
            semaforo.acquire();
            entrarRegiaoCritica();
            System.out.println("Volume de matéria prima: " + fabrica.getMateriaPrima());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            semaforo.release();
        }
    
    
    }
}
