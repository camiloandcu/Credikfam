package dev.sena.credikfam.credito;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/creditos")
public class CreditoController {
    private final CreditoService creditoService;

    public CreditoController(CreditoService creditoService) {
        this.creditoService = creditoService;
    }

    @GetMapping
    public List<CreditoDto> getAllCreditos() {
        return creditoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CreditoDto> getCreditoById(@PathVariable Long id) {
        CreditoDto creditoDto = creditoService.findById(id);
        return ResponseEntity.ok(creditoDto);
    }

    @PostMapping
    public ResponseEntity<CreditoDto> createCredito(@RequestBody CreditoDto creditoDto) {
        CreditoDto createdCredito = creditoService.save(creditoDto);
        return ResponseEntity.ok(createdCredito);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CreditoDto> updateCredito(@PathVariable Long id, @RequestBody CreditoDto creditoDto) {
        creditoDto.setId(id);
        CreditoDto updatedCredito = creditoService.save(creditoDto);
        return ResponseEntity.ok(updatedCredito);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCredito(@PathVariable Long id) {
        creditoService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/aprobado/{aprobado}")
    public ResponseEntity<List<CreditoDto>> getCreditoByAprobado(@PathVariable Boolean aprobado) {
        List<CreditoDto> creditos = creditoService.findByAprobado(aprobado);
        return ResponseEntity.ok(creditos);
    }

    @PutMapping("/{id}/aprobar")
    public ResponseEntity<Void> aprobarCredito(@PathVariable Long id) {
        creditoService.aprobar(id);
        return ResponseEntity.noContent().build();
    }
}
