package dev.sena.credikfam.funcionario;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface FuncionarioMapper {

    FuncionarioMapper INSTANCE = Mappers.getMapper(FuncionarioMapper.class);
    @Mapping(source = "empresa.empresaId", target = "empresaId")
    @Mapping(source = "tipoFuncionario.tipoFuncionarioId", target = "tipoFuncionarioId")
    FuncionarioDto toDto(Funcionario funcionario);

    @Mapping(source = "empresaId", target = "empresa.empresaId")
    @Mapping(source = "tipoFuncionarioId", target = "tipoFuncionario.tipoFuncionarioId")
    Funcionario toEntity(FuncionarioDto funcionarioDto);

}
