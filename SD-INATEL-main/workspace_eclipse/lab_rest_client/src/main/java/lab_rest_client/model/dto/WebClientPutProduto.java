package lab_rest_client.model.dto;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.WebClient;

public class WebClientPutProduto {
	ProdutoDTO produtoExistente = new ProdutoDTO();
	produtoExistente.setId(1L);
	produtoExistente.setDescricao("Furadeira a bateria");
	
	ResponseEntity<Void> responseEntity = WebClient.create("http://localhost:8080")
			.put()
			.uri("/produto")
			.bodyValue(produtoExistente)
			.retrieve()
			.toBodilessEntity()
			.block();
	
	HttpStatusCode statusCode = responseEntity.getStatusCode();
	
	System.out.println("Produto atualizado: ");
	System.out.println("Status da resposta: " + statusCode);
}
