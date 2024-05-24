package dev.sena.credikfam.credito;

import dev.sena.credikfam.credito.infoCredito.Analisis;
import dev.sena.credikfam.cliente.Cliente;
import dev.sena.credikfam.credito.infoCredito.Aprobacion;
import dev.sena.credikfam.empresa.Empresa;
import dev.sena.credikfam.credito.infoCredito.Reporte;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Credito")
public class Credito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long creditoId;

    @ManyToOne
    @JoinColumn(name = "empresa_id", nullable = false)
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reporte_id")
    private Reporte reporte;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "analisis_id")
    private Analisis analisis;

    @OneToMany(mappedBy = "credito", cascade = CascadeType.ALL)
    private List<Aprobacion> aprobacionList;

    @Column(name = "razon_credito", nullable = false)
    private String razonCredito;

    @Column(name = "monto_solicitado", nullable = false)
    private BigDecimal montoSolicitado;

    @Column(name = "fecha_inicio", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @Column(name = "cuotas", nullable = false)
    private int cuotas;
}
