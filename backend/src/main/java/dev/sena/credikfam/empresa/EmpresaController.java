package dev.sena.credikfam.empresa;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/empresas")
public class EmpresaController {

    private final EmpresaRepository empresaRepository;

    public EmpresaController(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    @GetMapping("")
    List<Empresa> findAll() {
        return empresaRepository.findAll();
    }

    @GetMapping("/{id}")
    Empresa findById(@PathVariable Integer id) {
        Optional<Empresa> empresa = empresaRepository.findById(id);
        if(empresa.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return empresa.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@RequestBody Empresa empresa) {
        empresaRepository.create(empresa);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Empresa empresa, @PathVariable Integer id) {
        empresaRepository.update(empresa, id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        empresaRepository.delete(id);
    }
}
