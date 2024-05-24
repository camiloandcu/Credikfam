package dev.sena.credikfam.credito.infoCredito;

import dev.sena.credikfam.credito.Credito;
import dev.sena.credikfam.funcionario.Funcionario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Aprobacion")
public class Aprobacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aprobacionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_credito")
    private Credito credito;

    @ManyToOne
    @JoinColumn(name = "funcionario_id", nullable = false)
    Funcionario aprobador;

    @Column(name = "fecha_aprobacion", nullable = false)
    @Temporal(TemporalType.DATE)
    Date fechaAprobacion;
}
