package dev.sena.credikfam.cliente;

import java.util.List;

public interface ClienteService {
    List<ClienteDto> findAll();
    ClienteDto findById(Long id);
    ClienteDto save(ClienteDto clienteDto);
    void delete(Long id);
}
