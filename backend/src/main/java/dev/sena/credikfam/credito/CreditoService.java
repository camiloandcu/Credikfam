package dev.sena.credikfam.credito;

import java.util.List;

public interface CreditoService {
    List<CreditoDto> findAll();
    CreditoDto findById(Long id);
    CreditoDto save(CreditoDto creditoDto);
    void delete(Long id);
    List<CreditoDto> findByAprobado(Boolean aprobado);

    void aprobar(Long id);
}
