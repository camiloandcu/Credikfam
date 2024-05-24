package dev.sena.credikfam.cliente;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ClienteMapper {

    ClienteMapper INSTANCE = Mappers.getMapper(ClienteMapper.class);

    ClienteDto toDto(Cliente cliente);
    Cliente toEntity(ClienteDto clienteDto);
}
