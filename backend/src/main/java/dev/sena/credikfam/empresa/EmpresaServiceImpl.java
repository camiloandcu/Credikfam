package dev.sena.credikfam.empresa;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmpresaServiceImpl implements EmpresaService {

    private final EmpresaRepository empresaRepository;
    private final EmpresaMapper empresaMapper;

    public EmpresaServiceImpl(EmpresaRepository empresaRepository, EmpresaMapper empresaMapper) {
        this.empresaRepository = empresaRepository;
        this.empresaMapper = empresaMapper;
    }

    @Override
    public List<EmpresaDto> findAll() {
        List<Empresa> empresas = empresaRepository.findAll();
        return empresas.stream()
                .map(empresaMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmpresaDto findById(Long id) {
        Empresa empresa = empresaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Empresa no existe"));
        return empresaMapper.toDto(empresa);
    }

    @Override
    public EmpresaDto save(EmpresaDto empresaDto) {
        Empresa empresa = empresaMapper.toEntity(empresaDto);
        empresa = empresaRepository.save(empresa);
        return empresaMapper.toDto(empresa);
    }

    @Override
    public void delete(Long id) {
        empresaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Empresa no existe"));

        empresaRepository.deleteById(id);
    }
}
