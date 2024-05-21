package dev.sena.credikfam.funcionario;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface FuncionarioMapper {

    FuncionarioMapper INSTANCE = Mappers.getMapper(FuncionarioMapper.class);
    @Mapping(source = "empresa.id", target = "empresaId")
    @Mapping(source = "tipoFuncionario.id", target = "tipoFuncionarioId")
    FuncionarioDto toDto(Funcionario funcionario);

    @Mapping(source = "empresaId", target = "empresa.id")
    @Mapping(source = "tipoFuncionarioId", target = "tipoFuncionario.id")
    Funcionario toEntity(FuncionarioDto funcionarioDto);

}
