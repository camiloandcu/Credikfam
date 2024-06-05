package dev.sena.credikfam.credito;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CreditoServiceImpl implements CreditoService {
    private final CreditoRepository creditoRepository;
    private final CreditoMapper creditoMapper;

    public CreditoServiceImpl(CreditoRepository creditoRepository, CreditoMapper creditoMapper) {
        this.creditoRepository = creditoRepository;
        this.creditoMapper = creditoMapper;
    }

    @Override
    public List<CreditoDto> findAll() {
        List<Credito> creditos = creditoRepository.findAll();
        return creditos.stream().map(creditoMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public CreditoDto findById(Long id) {
        return creditoRepository.findById(id)
                .map(creditoMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Credito no existe"));
    }

    @Override
    public CreditoDto save(CreditoDto creditoDto) {
        Credito credito = creditoMapper.toEntity(creditoDto);
        credito = creditoRepository.save(credito);
        return creditoMapper.toDto(credito);
    }

    @Override
    public void delete(Long id) {
        creditoRepository.deleteById(id);
    }

    @Override
    public List<CreditoDto> findByAprobado(Boolean aprobado) {
        return creditoRepository.findByAprobado(aprobado).stream()
                .map(creditoMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void aprobar(Long id) {
        Credito credito = creditoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Credito no existe"));
        credito.setAprobado(true);
        creditoRepository.save(credito);
    }
}
