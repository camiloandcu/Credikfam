package dev.sena.credikfam.cliente;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDto {
    private Long id;
    private String nombre;
    private String apellido;
    private String direccion;
    private String telefono;
    private Date fechaNacimiento;
    private String ocupacion;
}
