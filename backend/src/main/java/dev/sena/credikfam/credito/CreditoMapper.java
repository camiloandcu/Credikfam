package dev.sena.credikfam.credito;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CreditoMapper {

    CreditoMapper INSTANCE = Mappers.getMapper(CreditoMapper.class);

    @Mapping(source = "empresa.empresaId", target = "empresaId")
    @Mapping(source = "cliente.clienteId", target = "clienteId")
    @Mapping(source = "reporte.reporteId", target = "reporteId")
    @Mapping(source = "analisis.analisisId", target = "analisisId")
    CreditoDto toDto(Credito credito);

    @Mapping(source = "empresaId", target = "empresa.empresaId")
    @Mapping(source = "clienteId", target = "cliente.clienteId")
    @Mapping(source = "reporteId", target = "reporte.reporteId")
    @Mapping(source = "analisisId", target = "analisis.analisisId")
    Credito toEntity(CreditoDto creditoDto);
}
