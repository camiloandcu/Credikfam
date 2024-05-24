package dev.sena.credikfam.funcionario;

import java.util.List;

public interface FuncionarioService {
    List<FuncionarioDto> findAll();

    FuncionarioDto findById(Long id);

    FuncionarioDto save(FuncionarioDto funcionarioDto);

    void delete(Long id);
}
