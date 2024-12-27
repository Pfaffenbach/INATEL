package br.inatel.labs.labrest.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.inatel.labs.labrest.server.model.Produto;
import br.inatel.labs.labrest.server.service.ProdutoService;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService service;
	
	@GetMapping
	public List<Produto> getProdutos(){
		return service.findAll();
	}
	
	@GetMapping("/{id}")
	public Produto getProdutoById(@PathVariable("id") Long produtoId) {
		return service.findById(produtoId)
				.orElseThrow(() -> {
					String msg = String.format("Nenhum produto encontrado com o id [%s]", produtoId);
					throw new ResponseStatusException(HttpStatus.NOT_FOUND, msg);
				});	
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Produto postProduto(@RequestBody Produto produto) {
		Produto produtoCriado = service.create(produto);
		return produtoCriado;
	}
	
	@PutMapping
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void putProduto(@RequestBody Produto p) {
		service.update(p);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void deleteProduto(@PathVariable("id") Long produtoId) {
		Produto produtoEncontrado = getProdutoById(produtoId);
		service.remove(produtoEncontrado);
	}
	
	@GetMapping("/pesquisa")
	public List<Produto> getByFragDescricao(@RequestParam("descricao") String fragDescricao){
		return service.findByFragDescricao(fragDescricao);
	}
}
