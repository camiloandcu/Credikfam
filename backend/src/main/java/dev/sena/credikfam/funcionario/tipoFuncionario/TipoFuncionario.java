package dev.sena.credikfam.funcionario.tipoFuncionario;

import dev.sena.credikfam.empresa.Empresa;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TipoFuncionario")
public class TipoFuncionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tipoFuncionarioId;

    @Column(name = "tipo", nullable = false)
    private String tipo;
}
