package dev.sena.credikfam.credito;

import dev.sena.credikfam.cliente.Cliente;
import dev.sena.credikfam.funcionario.Funcionario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Credito")
public class Credito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "funcionario_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Funcionario funcionario;

    @Column(name = "razon_credito", nullable = false)
    private String razonCredito;

    @Column(name = "monto_solicitado", nullable = false)
    private BigDecimal montoSolicitado;

    @Column(name = "fecha_inicio", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @Column(name = "cuotas", nullable = false)
    private int cuotas;

    @Column(name = "aprobado", nullable = false)
    private Boolean aprobado;
}
