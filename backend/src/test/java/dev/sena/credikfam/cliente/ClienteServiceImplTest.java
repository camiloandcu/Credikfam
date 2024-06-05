package dev.sena.credikfam.cliente;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class ClienteServiceImplTest {

    @Mock
    private ClienteRepository clienteRepository;

    @Mock
    private ClienteMapper clienteMapper;

    @InjectMocks
    private ClienteServiceImpl clienteService;

    private Cliente cliente;
    private ClienteDto clienteDto;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        cliente = new Cliente();
        clienteDto = new ClienteDto();

        when(clienteMapper.toDto(cliente)).thenReturn(clienteDto);
        when(clienteMapper.toEntity(clienteDto)).thenReturn(cliente);
    }

    @Test
    void shouldFindAllClientes() {
        when(clienteRepository.findAll()).thenReturn(Arrays.asList(cliente));

        List<ClienteDto> result = clienteService.findAll();

        assertEquals(1, result.size());
        verify(clienteRepository, times(1)).findAll();
    }

    @Test
    void shouldFindClienteById() {
        when(clienteRepository.findById(1L)).thenReturn(Optional.of(cliente));

        ClienteDto result = clienteService.findById(1L);

        assertEquals(clienteDto, result);
        verify(clienteRepository, times(1)).findById(1L);
    }

    @Test
    void shouldThrowExceptionWhenClienteNotFound() {
        when(clienteRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> clienteService.findById(1L));
        verify(clienteRepository, times(1)).findById(1L);
    }

    @Test
    void shouldSaveCliente() {
        when(clienteRepository.save(cliente)).thenReturn(cliente);

        ClienteDto result = clienteService.save(clienteDto);

        assertEquals(clienteDto, result);
        verify(clienteRepository, times(1)).save(cliente);
    }

    @Test
    void shouldDeleteCliente() {
        doNothing().when(clienteRepository).deleteById(1L);

        clienteService.delete(1L);

        verify(clienteRepository, times(1)).deleteById(1L);
    }
}