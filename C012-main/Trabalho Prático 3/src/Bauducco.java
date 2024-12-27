

public class Bauducco {
    private double materiaPrima;

    public Bauducco(double materiaPrima) {
        this.materiaPrima = materiaPrima;
    }

    public double getMateriaPrima() {
        return materiaPrima;
    }

    public void setMateriaPrima(double materiaPrima) {
        this.materiaPrima = materiaPrima;
    }
    
    public void usarMateriaPrima(){
        double novaMateriaPrima = materiaPrima - 25;
        this.materiaPrima = novaMateriaPrima;
    }
    
    

}
