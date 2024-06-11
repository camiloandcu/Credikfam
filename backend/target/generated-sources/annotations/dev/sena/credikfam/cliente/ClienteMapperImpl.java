package dev.sena.credikfam.cliente;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-11T00:05:24-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class ClienteMapperImpl implements ClienteMapper {

    @Override
    public ClienteDto toDto(Cliente cliente) {
        if ( cliente == null ) {
            return null;
        }

        ClienteDto clienteDto = new ClienteDto();

        clienteDto.setId( cliente.getId() );
        clienteDto.setNombre( cliente.getNombre() );
        clienteDto.setApellido( cliente.getApellido() );
        clienteDto.setDireccion( cliente.getDireccion() );
        clienteDto.setTelefono( cliente.getTelefono() );
        clienteDto.setFechaNacimiento( cliente.getFechaNacimiento() );
        clienteDto.setOcupacion( cliente.getOcupacion() );

        return clienteDto;
    }

    @Override
    public Cliente toEntity(ClienteDto clienteDto) {
        if ( clienteDto == null ) {
            return null;
        }

        Cliente cliente = new Cliente();

        cliente.setId( clienteDto.getId() );
        cliente.setNombre( clienteDto.getNombre() );
        cliente.setApellido( clienteDto.getApellido() );
        cliente.setDireccion( clienteDto.getDireccion() );
        cliente.setTelefono( clienteDto.getTelefono() );
        cliente.setFechaNacimiento( clienteDto.getFechaNacimiento() );
        cliente.setOcupacion( clienteDto.getOcupacion() );

        return cliente;
    }
}
