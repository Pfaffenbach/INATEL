import java.util.ArrayList;
import java.util.List;

public class CarrinhoCompra {

	private List<Bolacha> bolachas;
	private CupomDesconto cupom;

	public CarrinhoCompra() {
		bolachas = new ArrayList<Bolacha>();
	}

	public void adiciona(Bolacha bl) throws NumeroNegativoException {

		if(bl.getQtd() > 0){
			bolachas.add(bl);
		}else{
			throw new NumeroNegativoException("Não é possivel adicionar uma quantidade negativa");
		}

	}

	public double somaTotal() {
		double total = 0;
		for (Bolacha bolacha : bolachas) {
			total += bolacha.getValor();
		}

		if(cupom != null && cupom.getDesconto() > 0){
			return somaTotalComDesconto(total, cupom.getDesconto());
		}else{
			return total;
		}
	}

	private double somaTotalComDesconto(double total, double desconto){
		return total = total - (total*desconto);
	}

	public double somaTotalItens() {
		double total = 0;
		for (Bolacha bolacha : bolachas) {

			total += bolacha.getQtd();
		}
		return total;
	}

	public CupomDesconto getCupom() {
		return cupom;
	}

	public void setCupom(CupomDesconto cupom) {
		this.cupom = cupom;
	}
}