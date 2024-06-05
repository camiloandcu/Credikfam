package dev.sena.credikfam.cliente;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ClienteControllerTest {
    private ClienteController clienteController;

    @MockBean
    private ClienteService clienteService;

    @BeforeEach
    void setUp() {
        clienteController = new ClienteController(clienteService);
    }

    @Test
    void shouldReturnAllClientes() {
        ClienteDto clienteDto = new ClienteDto();
        when(clienteService.findAll()).thenReturn(Arrays.asList(clienteDto));

        List<ClienteDto> result = clienteController.getAllClientes();

        assertEquals(1, result.size());
        verify(clienteService, times(1)).findAll();
    }

    @Test
    void shouldReturnClienteById() {
        ClienteDto clienteDto = new ClienteDto();
        when(clienteService.findById(anyLong())).thenReturn(clienteDto);

        ResponseEntity<ClienteDto> result = clienteController.getClienteById(1L);

        assertEquals(clienteDto, result.getBody());
        verify(clienteService, times(1)).findById(anyLong());
    }

    @Test
    void shouldCreateCliente() {
        ClienteDto clienteDto = new ClienteDto();
        when(clienteService.save(any(ClienteDto.class))).thenReturn(clienteDto);

        ResponseEntity<ClienteDto> result = clienteController.createCliente(clienteDto);

        assertEquals(clienteDto, result.getBody());
        verify(clienteService, times(1)).save(any(ClienteDto.class));
    }

    @Test
    void shouldUpdateCliente() {
        ClienteDto clienteDto = new ClienteDto();
        when(clienteService.save(any(ClienteDto.class))).thenReturn(clienteDto);

        ResponseEntity<ClienteDto> result = clienteController.updateCliente(1L, clienteDto);

        assertEquals(clienteDto, result.getBody());
        verify(clienteService, times(1)).save(any(ClienteDto.class));
    }

    @Test
    void shouldDeleteCliente() {
        doNothing().when(clienteService).delete(anyLong());

        ResponseEntity<Void> result = clienteController.deleteCliente(1L);

        assertEquals(ResponseEntity.noContent().build(), result);
        verify(clienteService, times(1)).delete(anyLong());
    }
}