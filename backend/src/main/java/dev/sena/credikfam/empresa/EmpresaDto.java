package dev.sena.credikfam.empresa;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmpresaDto {
    private Long id;
    private String nombre;
    private String descripcion;
}
