package dev.sena.credikfam.funcionario;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class FuncionarioController {

    private FuncionarioService funcionarioService;

    public FuncionarioController(FuncionarioService funcionarioService) {
        this.funcionarioService = funcionarioService;
    }

    @GetMapping("")
    public ResponseEntity<List<FuncionarioDto>> findAll() {
        List<FuncionarioDto> funcionarios = funcionarioService.findAll();
        return ResponseEntity.ok(funcionarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDto> findById(@PathVariable Long id) {
        FuncionarioDto funcionarioDto = funcionarioService.findById(id);
        return ResponseEntity.ok(funcionarioDto);
    }

    @PostMapping("")
    public ResponseEntity<FuncionarioDto> create(@RequestBody FuncionarioDto funcionarioDto) {
        FuncionarioDto createdFuncionario = funcionarioService.save(funcionarioDto);
        return new ResponseEntity<>(createdFuncionario, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDto> update(@PathVariable Long id, @RequestBody FuncionarioDto funcionarioDto) {
        funcionarioDto.setId(id);
        FuncionarioDto updatedFuncionario = funcionarioService.save(funcionarioDto);
        return ResponseEntity.ok(updatedFuncionario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        funcionarioService.delete(id);
        return ResponseEntity.ok("Funcionario eliminado exitosamente");
    }
}
