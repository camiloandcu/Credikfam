package dev.sena.credikfam.empresa;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmpresaServiceImpl implements EmpresaService {

    private EmpresaRepository empresaRepository;

    public EmpresaServiceImpl(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    @Override
    public EmpresaDto create(EmpresaDto empresaDto) {
        Empresa empresa = EmpresaMapper.mapToEmpresa(empresaDto);
        Empresa empresaGuardada = empresaRepository.save(empresa);
        return EmpresaMapper.mapToEmpresaDto(empresaGuardada);
    }

    @Override
    public EmpresaDto findById(Long id) {
        Empresa empresa = empresaRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Empresa no existe"));
        return EmpresaMapper.mapToEmpresaDto(empresa);
    }

    @Override
    public List<EmpresaDto> findAll() {
        List<Empresa> empresas = empresaRepository.findAll();
        return empresas.stream().map(EmpresaMapper::mapToEmpresaDto)
                .collect(Collectors.toList());
    }
}
