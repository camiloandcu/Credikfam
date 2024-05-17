package dev.sena.credikfam.empresa;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class EmpresaRepository {

    private List<Empresa> empresas = new ArrayList<>();

    @PostConstruct
    private void init() {
        empresas.add(new Empresa(
                1,
                "CSC",
                "Empresa de créditos de alto valor"
        ));
        empresas.add(new Empresa(
                2,
                "Credicolombia",
                "Empresa de créditos a bajo interés"
        ));
    }

    List<Empresa> findAll() {
        return empresas;
    }

    Optional<Empresa> findById(Integer id) {
        return empresas.stream()
                .filter(empresa -> empresa.id() == id)
                .findFirst();
    }

    void create(Empresa empresa) {
        empresas.add(empresa);
    }

    void update(Empresa empresa, Integer id) {
        Optional<Empresa> empresaExistente = findById(id);
        if(empresaExistente.isPresent()) {
            empresas.set(empresas.indexOf(empresaExistente.get()), empresa);
        }
    }

    void delete(Integer id) {
        empresas.removeIf(empresa -> empresa.id().equals(id));
    }


}
