package dev.sena.credikfam.credito;

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
    private Long creditoId;
    private Long empresaId;
    private Long clienteId;
    private Long reporteId;
    private Long analisisId;
    private String razonCredito;
    private BigDecimal montoSolicitado;
    private Date fechaInicio;
    private int cuotas;
}
