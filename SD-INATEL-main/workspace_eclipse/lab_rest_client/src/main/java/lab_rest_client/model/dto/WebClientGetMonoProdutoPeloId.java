package lab_rest_client.model.dto;

import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import reactor.core.publisher.Mono;

public class WebClientGetMonoProdutoPeloId {
	{
		try {
			Mono<ProdutoDTO> monoProduto = WebClient.create("http://localhost:8080")
					.get()
					.uri("/produto/1")
					.retrieve()
					.bodyToMono(ProdutoDTO.class)
					;
			monoProduto.subscribe();
			
			ProdutoDTO produto = monoProduto.block();
			
			System.out.println("Produto Encontrado");
			System.out.println(produto);
		} catch (WebClientResponseException e){
			System.out.println("Status code:" + e.getStatusCode());
			System.out.println("Mensagem:" + e.getMessage());
		}
	}
}