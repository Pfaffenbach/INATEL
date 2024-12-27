
public class Conta {

    private double saldo;

    // outros métodos e atributos...

    public void atualiza(double taxa) {
//        synchronized (this) {
            double saldoAtualizado = this.saldo * (1 + taxa);
            this.saldo = saldoAtualizado;           
//        }
    }

    public Conta(double saldo) {
        this.saldo = saldo;
    }

    public void deposita(double valor) {
//        synchronized (this) {
            double novoSaldo = this.saldo + valor;
            this.saldo = novoSaldo;         
//        }
    }
    
    public void saca(double valor){
//        synchronized (this){
            double novoSaldo = this.saldo - valor;
            if(novoSaldo > -400){
                this.saldo = novoSaldo;
            }
            else{
                this.saldo = -400;
            }
//        }
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }
    

    
}