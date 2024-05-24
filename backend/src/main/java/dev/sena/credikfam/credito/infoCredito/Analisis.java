package dev.sena.credikfam.credito.infoCredito;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Analisis")
public class Analisis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long analisisId;

    @Column(name = "monto_admitido", nullable = false)
    private BigDecimal montoAdmitido;

    @Column(name = "evaluacion_riesgo")
    private Integer evaluacionRiesgo;

    @Column(name = "factores_riesgo")
    private String factoresRiesgo;

    @Column(name = "comentarios", nullable = false)
    private String comentarios;
}
