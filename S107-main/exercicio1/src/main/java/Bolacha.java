public class Bolacha {
	
	private String nome;
	private int qtd;
	private double valor;
	
	public Bolacha(String nome, int qtd, double valor) {
		this.nome = nome;
		this.qtd = qtd;
		this.valor = valor;
	}

	public String getNome() {
		return nome;
	}
	public int getQtd() {
		return qtd;
	}
	public double getValor() {
		return valor;
	}
}