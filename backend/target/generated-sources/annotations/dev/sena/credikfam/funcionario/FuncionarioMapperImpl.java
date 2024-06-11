package dev.sena.credikfam.funcionario;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-11T00:05:24-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class FuncionarioMapperImpl implements FuncionarioMapper {

    @Override
    public FuncionarioDto toDto(Funcionario funcionario) {
        if ( funcionario == null ) {
            return null;
        }

        FuncionarioDto funcionarioDto = new FuncionarioDto();

        funcionarioDto.setId( funcionario.getId() );
        funcionarioDto.setTipoFuncionario( funcionario.getTipoFuncionario() );
        funcionarioDto.setNombre( funcionario.getNombre() );
        funcionarioDto.setApellido( funcionario.getApellido() );

        return funcionarioDto;
    }

    @Override
    public Funcionario toEntity(FuncionarioDto funcionarioDto) {
        if ( funcionarioDto == null ) {
            return null;
        }

        Funcionario funcionario = new Funcionario();

        funcionario.setId( funcionarioDto.getId() );
        funcionario.setTipoFuncionario( funcionarioDto.getTipoFuncionario() );
        funcionario.setNombre( funcionarioDto.getNombre() );
        funcionario.setApellido( funcionarioDto.getApellido() );

        return funcionario;
    }
}
