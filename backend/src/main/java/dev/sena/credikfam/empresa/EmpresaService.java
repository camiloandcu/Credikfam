package dev.sena.credikfam.empresa;

import java.util.List;

public interface EmpresaService {
    List<EmpresaDto> findAll();

    EmpresaDto findById(Long id);

    EmpresaDto save(EmpresaDto empresa);

    void delete(Long id);
}
