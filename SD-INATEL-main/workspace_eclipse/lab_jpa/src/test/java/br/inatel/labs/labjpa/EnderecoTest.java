package br.inatel.labs.labjpa;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import br.inatel.labs.labjpa.entity.Endereco;
import br.inatel.labs.labjpa.service.EnderecoService;

@SpringBootTest
public class EnderecoTest {
	@Autowired
	private EnderecoService service;
	
	@Test
	public void testarUUIDGeradoPeloJPAListener() {
		Endereco endereco = new Endereco();
		endereco.setRua("Av. Joao de Camargo");
		endereco.setNumero("510");
		endereco.setCidade("Santa Rita");
		endereco.setUf("MG");
		
		endereco = service.salvar(endereco);
		System.out.println(endereco);
	}
}
