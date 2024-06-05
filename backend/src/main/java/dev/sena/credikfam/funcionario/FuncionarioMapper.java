package dev.sena.credikfam.funcionario;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface FuncionarioMapper {

    FuncionarioMapper INSTANCE = Mappers.getMapper(FuncionarioMapper.class);
    FuncionarioDto toDto(Funcionario funcionario);
    Funcionario toEntity(FuncionarioDto funcionarioDto);

}
