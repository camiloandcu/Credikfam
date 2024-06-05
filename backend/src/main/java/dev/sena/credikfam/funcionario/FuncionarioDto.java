package dev.sena.credikfam.funcionario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FuncionarioDto {
    private Long id;
    private String tipoFuncionario;
    private String nombre;
    private String apellido;
}
