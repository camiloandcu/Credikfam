package dev.sena.credikfam.empresa;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empresas")
public class EmpresaController {

    private EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @GetMapping("")
    public ResponseEntity<List<EmpresaDto>> findAll() {
        List<EmpresaDto> empresas = empresaService.findAll();
        return ResponseEntity.ok(empresas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmpresaDto> findById(@PathVariable Long id) {
        EmpresaDto empresaDto = empresaService.findById(id);
        return ResponseEntity.ok(empresaDto);
    }

    @PostMapping("")
    public ResponseEntity<EmpresaDto> create(@RequestBody EmpresaDto empresaDto) {
        return new ResponseEntity<>(empresaService.create(empresaDto), HttpStatus.CREATED);
    }
}
