package dev.sena.credikfam.credito;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CreditoMapper {

    CreditoMapper INSTANCE = Mappers.getMapper(CreditoMapper.class);

    CreditoDto toDto(Credito credito);

    Credito toEntity(CreditoDto creditoDto);
}
