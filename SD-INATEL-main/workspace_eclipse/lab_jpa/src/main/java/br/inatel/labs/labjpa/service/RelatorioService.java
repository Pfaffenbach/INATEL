package br.inatel.labs.labjpa.service;

import java.util.List;
import org.springframework.stereotype.Service;
import br.inatel.labs.labjpa.dto.TotalCompradoPorFornecedorDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
public class RelatorioService {
	 @PersistenceContext
	 private EntityManager em;
	 
	 public List<TotalCompradoPorFornecedorDTO> pesquisarTotalCompradoPorFornecedor(){
		 String query = """
		 		select new br.inatel.labs.labjpa.dto.TotalCompradoPorFornecedorDTO
		 			( f.razaoSocial
		 			, sum(i.quantidade * i.valorcomprador)
		 			)
		 		from NotaCompraItem i
		 			join i.notaCompra n
		 			join n.fornecedor f
		 		group by f.razaoSocial
		 		""";
		 
		 return em.createQuery(query, TotalCompradoPorFornecedorDTO.class)
				 .getResultList();
	 }
}
