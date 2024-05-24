package dev.sena.credikfam.credito.infoCredito;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Reporte")
public class Reporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reporteId;

    @Column(name = "doc_identidad", nullable = false)
    private String docIdentidad;

    @Column(name = "cert_laboral")
    private String certLaboral;

    @Column(name = "hist_crediticio")
    private String histCrediticio;

    @Column(name = "info_bancaria")
    private String infoBancaria;

    @Column(name = "est_cliente")
    private String estCliente;
}
