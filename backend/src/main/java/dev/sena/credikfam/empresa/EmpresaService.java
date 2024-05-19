package dev.sena.credikfam.empresa;

import java.util.List;

public interface EmpresaService {
    EmpresaDto create(EmpresaDto empresa);

    EmpresaDto findById(Long id);

    List<EmpresaDto> findAll();
}
