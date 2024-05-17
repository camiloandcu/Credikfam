package dev.sena.credikfam.funcionario;

public record Funcionario(
        Integer id,
        String nombre,
        TipoFuncionario tipo
) {
}
