package dev.sena.credikfam.empresa;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaDto {
    private Long empresaId;
    private String nombre;
    private String descripcion;
}
