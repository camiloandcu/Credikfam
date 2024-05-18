package dev.sena.credikfam.empresa;

import jakarta.validation.constraints.NotEmpty;

public record Empresa(
        Integer id,
        @NotEmpty
        String nombre,
        String descripcion
) {
}
