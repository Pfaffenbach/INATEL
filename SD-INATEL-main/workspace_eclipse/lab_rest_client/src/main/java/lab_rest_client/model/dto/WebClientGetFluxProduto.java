package lab_rest_client.model.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;

public class WebClientGetFluxProduto {

	List<ProdutoDTO> listaProduto = new ArrayList<ProdutoDTO>();
	
	Flux<ProdutoDTO> fluxProduto = WebClient.create("http//localhost:8080")
			.get()
			.uri("/produto")
			.retrieve()
			.bodyToFlux(ProdutoDTO.class)
			;
	fluxProduto.subscribe( p -> listaProduto.add(p));
	
	fluxProduto.blockLast();
	
	System.out.println("Lista de Produtos:");
	System.out.println( listaProduto );
}
