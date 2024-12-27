import static org.junit.Assert.*;

import org.junit.Test;

public class TesteCarrinhoCompra {

	@Test
	public void testSomaTotalCompra() throws NumeroNegativoException {

		Bolacha bl1 = new Bolacha("Bolacha de maizena", 30, 50);
		Bolacha bl2 = new Bolacha("Bolacha de gergelim", 50, 150);

		CarrinhoCompra carrinho = new CarrinhoCompra();

		carrinho.adiciona(bl1);
		carrinho.adiciona(bl2);

		assertEquals(200, carrinho.somaTotal(),0.01);

	}

	@Test
	public void testSomaTotalQtd() throws NumeroNegativoException {

		Bolacha bl3 = new Bolacha("Bolacha recheada de morango", 6, 130);
		Bolacha bl4 = new Bolacha("Bolacha recheada de chocolate", 4, 110);

		CarrinhoCompra carrinho = new CarrinhoCompra();

		carrinho.adiciona(bl3);
		carrinho.adiciona(bl4);
		assertEquals(10, carrinho.somaTotalItens(),0.01);


	}

	@Test(expected = NumeroNegativoException.class)
	public void testSomaNegativo() throws NumeroNegativoException {

		Bolacha bl5 = new Bolacha("Bolacha de baunilha", -6, 250);
		Bolacha bl6 = new Bolacha("Bolacha gourmet", -4, 100);

		CarrinhoCompra carrinho = new CarrinhoCompra();

		carrinho.adiciona(bl5);
		carrinho.adiciona(bl6);

	}

	@Test
	public void testIntegracaoCupom() throws NumeroNegativoException {

		Bolacha bl7 = new Bolacha("Bolacha com creme de castanha", 2, 150);
		Bolacha bl8 = new Bolacha("Bolacha com creme de avelã", 1, 100);

		CarrinhoCompra carrinho = new CarrinhoCompra();
		CupomDesconto cupom = new CupomDesconto(0.20);
		carrinho.setCupom(cupom);

		carrinho.adiciona(bl7);
		carrinho.adiciona(bl8);
		carrinho.somaTotal();

		assertEquals(200, carrinho.somaTotal(), 0.1);

	}
}

