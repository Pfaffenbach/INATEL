package br.inatel.labs.labjpa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.inatel.labs.labjpa.entity.NotaCompra;
import br.inatel.labs.labjpa.entity.NotaCompraItem;
import br.inatel.labs.labjpa.repository.NotaCompraItemRepository;
import br.inatel.labs.labjpa.repository.NotaCompraRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class NotaCompraService {
	
	//@PersistenceContext
	//private EntityManager em;
	
	@Autowired
	private NotaCompraRepository ncRepository;
	@Autowired
	private NotaCompraItemRepository nciRepository;
	
	// nota compra
	//public NotaCompra salvarNotaCompra(NotaCompra nota) {
	//	return em.merge(nota);
	//}
	
	public NotaCompra salvarNotaCompra(NotaCompra nota) {
		return ncRepository.save(nota);
	}
	
	//public NotaCompra buscarNotaCompraPeloId(Long id) {
	//	return em.find(NotaCompra.class, id);
	//}
	
	public Optional<NotaCompra> buscarNotaCompraPeloId(Long id) {
		return ncRepository.findById(id);
	}
	
	//public List<NotaCompra> listarNotaCompra(){
	//	return em.createQuery("select n from NotaCompra n", NotaCompra.class)
	//			.getResultList();
	//}
	
	public List<NotaCompra> listarNotaCompra(){
		return ncRepository.findAll();
	}
	
	//public NotaCompra buscarNotaCompraItemPeloIdComListaItem(Long id) {
	//	NotaCompra notacompra = em.find(NotaCompra.class, id);
	//	notacompra.getListaNotaCompraItem().size();
	//	return notacompra;
	//}
	
	public NotaCompra buscarNotaCompraItemPeloIdComListaItem(Long id) {
		Optional<NotaCompra> opNotaCompra = ncRepository.findById(id);
		if (opNotaCompra.isPresent()) {
			NotaCompra notaCompra = opNotaCompra.get();
			notaCompra.getListaNotaCompraItem().size();
			return notaCompra;
		} else {
			throw new RuntimeException("Nenhum nota compra encontrado");
		}
	}
	
	// nota compra item
	//public NotaCompraItem salvarNotaCompraItem(NotaCompraItem item) {
	//		return em.merge(item);
	//}
	
	public NotaCompraItem salvarNotaCompraItem(NotaCompraItem item) {
		return nciRepository.save(item);
	}
	
	//public NotaCompraItem buscarNotaCompraItemPeloId(Long id) {
	//	return em.find(NotaCompraItem.class, id);
	//}
	
	public Optional<NotaCompraItem> buscarNotaCompraItemPeloId(Long id) {
		return nciRepository.findById(id);
	}
	
	//public List<NotaCompraItem> listarNotaCompraItem(){
	//	return em.createQuery("select i from NotaCompraItem i", NotaCompraItem.class)
	//			.getResultList();
	//}
	
	public List<NotaCompraItem> listarNotaCompraItem(){
		return nciRepository.findAll();
	}
	
}
