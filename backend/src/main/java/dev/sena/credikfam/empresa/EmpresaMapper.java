package dev.sena.credikfam.empresa;

public class EmpresaMapper {

    public static Empresa mapToEmpresa(EmpresaDto empresaDto){
        return new Empresa(
                empresaDto.getId(),
                empresaDto.getNombre(),
                empresaDto.getDescripcion()
        );
    }

    public static EmpresaDto mapToEmpresaDto(Empresa empresa){
        return new EmpresaDto(
                empresa.getId(),
                empresa.getNombre(),
                empresa.getDescripcion()
        );
    }
}
