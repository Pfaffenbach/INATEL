package lab_rest_client.model.dto;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.WebClient;

public class WebClientDeleteProdutoPeloId {

	ResponseEntity<Void> responseEntity = WebClient.create("http://localhost:8080")
			.delete()
			.uri("/produto/3")
			.retrieve()
			.toBodilessEntity()
			.block();
	
	HttpStatusCode statusCode = responseEntity.getStatusCode();
	
	System.out.println("Produto removido");
	System.out.println("Satus da resposta: ") + statusCode;
}
