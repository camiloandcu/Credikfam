package dev.sena.credikfam.credito;

import dev.sena.credikfam.cliente.Cliente;
import dev.sena.credikfam.cliente.ClienteDto;
import dev.sena.credikfam.funcionario.Funcionario;
import dev.sena.credikfam.funcionario.FuncionarioDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-11T02:26:39-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class CreditoMapperImpl implements CreditoMapper {

    @Override
    public CreditoDto toDto(Credito credito) {
        if ( credito == null ) {
            return null;
        }

        CreditoDto creditoDto = new CreditoDto();

        creditoDto.setId( credito.getId() );
        creditoDto.setCliente( clienteToClienteDto( credito.getCliente() ) );
        creditoDto.setFuncionario( funcionarioToFuncionarioDto( credito.getFuncionario() ) );
        creditoDto.setRazonCredito( credito.getRazonCredito() );
        creditoDto.setMontoSolicitado( credito.getMontoSolicitado() );
        creditoDto.setFechaInicio( credito.getFechaInicio() );
        creditoDto.setCuotas( credito.getCuotas() );
        creditoDto.setAprobado( credito.getAprobado() );

        return creditoDto;
    }

    @Override
    public Credito toEntity(CreditoDto creditoDto) {
        if ( creditoDto == null ) {
            return null;
        }

        Credito credito = new Credito();

        credito.setId( creditoDto.getId() );
        credito.setCliente( clienteDtoToCliente( creditoDto.getCliente() ) );
        credito.setFuncionario( funcionarioDtoToFuncionario( creditoDto.getFuncionario() ) );
        credito.setRazonCredito( creditoDto.getRazonCredito() );
        credito.setMontoSolicitado( creditoDto.getMontoSolicitado() );
        credito.setFechaInicio( creditoDto.getFechaInicio() );
        credito.setCuotas( creditoDto.getCuotas() );
        credito.setAprobado( creditoDto.getAprobado() );

        return credito;
    }

    protected ClienteDto clienteToClienteDto(Cliente cliente) {
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

    protected FuncionarioDto funcionarioToFuncionarioDto(Funcionario funcionario) {
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

    protected Cliente clienteDtoToCliente(ClienteDto clienteDto) {
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

    protected Funcionario funcionarioDtoToFuncionario(FuncionarioDto funcionarioDto) {
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
