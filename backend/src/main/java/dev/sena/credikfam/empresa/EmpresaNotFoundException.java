package dev.sena.credikfam.empresa;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EmpresaNotFoundException extends RuntimeException {
    public EmpresaNotFoundException() {
        super("Empresa No Encontrada");
    }
}
