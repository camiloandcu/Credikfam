package dev.sena.credikfam.credito;

import dev.sena.credikfam.cliente.ClienteDto;
import dev.sena.credikfam.funcionario.FuncionarioDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreditoDto {
    private Long id;
    private ClienteDto cliente;
    private FuncionarioDto funcionario;
    private String razonCredito;
    private BigDecimal montoSolicitado;
    private Date fechaInicio;
    private int cuotas;
    private Boolean aprobado;
}
