package dev.sena.credikfam.empresa;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface EmpresaMapper {

  EmpresaMapper INSTANCE = Mappers.getMapper(EmpresaMapper.class);
  EmpresaDto toDto(Empresa empresa);
  Empresa toEntity(EmpresaDto empresaDto);

}
